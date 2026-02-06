// Changes made:
// 1) Subtype pickers now include an explicit "None" option (clears subtype + clears free text).
// 2) Switched Supertype + Type back to dropdowns (daisyUI select).
// 3) Subtypes are dropdowns too (with suggestions + None) AND still allow free-text override.

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import {
  MTGCard,
  manaOptions,
  superTypeOptions,
  typeOptions,
  subtypeSuggestions,
  getCardManaCount,
  formatTypeLine,
} from "../pages/MagicHomePage";

interface CardModalFormProps {
  open: boolean;
  card: MTGCard | null;
  onSave: (card: MTGCard) => void;
  onCancel: () => void;
}

type StepId = 0 | 1 | 2 | 3 | 4;

function normaliseSubtype(s: string) {
  return s.trim().replace(/\s+/g, " ");
}

function Stepper({ step }: { step: StepId }) {
  const labels = ["Basics", "Type line", "Mana", "Stats", "Review"];
  return (
    <ul className="steps w-full">
      {labels.map((l, i) => (
        <li key={l} className={`step text-xs ${i <= step ? "step-primary" : ""}`}>
          {l}
        </li>
      ))}
    </ul>
  );
}

function SubtypePicker({
  label,
  picked,
  onPick,
  freeText,
  setFreeText,
}: {
  label: string;
  picked: string;
  onPick: (v: string) => void;
  freeText: string;
  setFreeText: (v: string) => void;
}) {
  const effective = freeText.trim() ? normaliseSubtype(freeText) : picked;

  return (
    <div className="rounded-2xl border border-base-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold">{label}</div>
        <div className="text-sm opacity-70">{effective ? `Selected: ${effective}` : "None"}</div>
      </div>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Pick from list</legend>

        <select
          className="select select-bordered w-full"
          value={picked || "__NONE__"}
          onChange={(e) => {
            const v = e.target.value;
            if (v === "__NONE__") {
              onPick("");
              setFreeText("");
              return;
            }
            onPick(v);
            setFreeText(""); // list selection clears free text override
          }}
        >
          <option value="__NONE__">None</option>
          {subtypeSuggestions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <div className="mt-3">
          <legend className="fieldset-legend">Free text (overrides dropdown)</legend>
          <input
            name="freeText"
            className="input input-bordered w-full"
            placeholder="e.g. Shaman, Cat, Treasure…"
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
          />

          <div className="mt-2 flex justify-end gap-2">
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setFreeText("")}
              disabled={!freeText.trim()}
            >
              Clear
            </button>

            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => {
                if (freeText.trim()) onPick(normaliseSubtype(freeText));
              }}
              disabled={!freeText.trim()}
            >
              Apply
            </button>

            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => {
                onPick("");
                setFreeText("");
              }}
              title="Clear subtype"
            >
              None
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

const CardModalForm: React.FC<CardModalFormProps> = ({ open, card, onSave, onCancel }) => {
  const [step, setStep] = useState<StepId>(0);

  const [name, setName] = useState(card?.name || "");
  const [mana, setMana] = useState<string[]>(card?.mana || []);
  const [power, setPower] = useState<number | undefined>(card?.power);
  const [toughness, setToughness] = useState<number | undefined>(card?.toughness);
  const [count, setCount] = useState(card?.count || 1);
  const [color, setColor] = useState<MTGCard["color"]>(card?.color || undefined);

  const [superType, setSuperType] = useState<MTGCard["superType"]>(card?.superType || "None");
  const [type, setType] = useState<MTGCard["type"]>(card?.type || "None");

  const [subtype1, setSubtype1] = useState<string>(card?.subtype1 || "");
  const [subtype2, setSubtype2] = useState<string>(card?.subtype2 || "");

  const [subtype1Free, setSubtype1Free] = useState("");
  const [subtype2Free, setSubtype2Free] = useState("");

  // Sync state when opening a different card
  useEffect(() => {
    if (!open) return;
    setStep(0);
    setName(card?.name || "");
    setMana(card?.mana || []);
    setPower(card?.power);
    setToughness(card?.toughness);
    setCount(card?.count || 1);
    setColor(card?.color || undefined);
    setSuperType((card?.superType as any) || "None");
    setType((card?.type as any) || "None");
    setSubtype1(card?.subtype1 || "");
    setSubtype2(card?.subtype2 || "");
    setSubtype1Free("");
    setSubtype2Free("");
  }, [open, card?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Modal backdrop and esc close logic
  const modalBgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onCancel]);

  const handleModalBgClick = (e: React.MouseEvent) => {
    if (e.target === modalBgRef.current) onCancel();
  };

  // Mana
  const addMana = (m: string) => setMana([...mana, m]);
  const removeMana = (idx: number) => setMana(mana.filter((_, i) => i !== idx));

  // Grouped buttons for power/toughness
  const groupedButtons = (value: number | undefined, setValue: (v: number | undefined) => void) => (
    <div className="join flex flex-wrap">
      <button
        className={`btn join-item btn-sm ${value === undefined ? "btn-accent" : "btn-secondary"}`}
        onClick={(e) => {
          e.preventDefault();
          setValue(undefined);
        }}
        type="button"
      >
        -
      </button>
      {[...Array(12)].map((_, i) => (
        <button
          key={i + 1}
          className={`btn join-item btn-sm ${value === i + 1 ? "btn-primary" : "btn-secondary"}`}
          onClick={(e) => {
            e.preventDefault();
            setValue(i + 1);
          }}
          type="button"
        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  const colorOptions: { value: MTGCard["color"]; label: string; className: string }[] = [
    { value: "white", label: "White", className: "" },
    { value: "red", label: "Red", className: "" },
    { value: "blue", label: "Blue", className: "" },
    { value: "green", label: "Green", className: "" },
    { value: "black", label: "Black", className: "" },
    { value: "multicoloured", label: "Multi", className: "" },
    { value: "uncoloured", label: "Uncoloured", className: "" },
  ];

  const effectiveSubtype1 = useMemo(
    () => normaliseSubtype(subtype1Free.trim() ? subtype1Free : subtype1),
    [subtype1, subtype1Free],
  );
  const effectiveSubtype2 = useMemo(
    () => normaliseSubtype(subtype2Free.trim() ? subtype2Free : subtype2),
    [subtype2, subtype2Free],
  );

  const previewCard: MTGCard = useMemo(
    () => ({
      id: card?.id || "preview",
      name: name || "Untitled",
      count: count || 1,
      mana: mana.length ? mana : undefined,
      power,
      toughness,
      color,
      superType,
      type,
      subtype1: effectiveSubtype1 || undefined,
      subtype2: effectiveSubtype2 || undefined,
    }),
    [card?.id, name, count, mana, power, toughness, color, superType, type, effectiveSubtype1, effectiveSubtype2],
  );

  const canNext = useMemo(() => {
    if (step === 0) return name.trim().length > 0 && count >= 1;
    return true;
  }, [step, name, count]);

  const goNext = () => setStep((s) => (s < 4 ? ((s + 1) as StepId) : s));
  const goBack = () => setStep((s) => (s > 0 ? ((s - 1) as StepId) : s));

  if (!open) return null;

  return (
    <div
      ref={modalBgRef}
      onClick={handleModalBgClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <div className="w-[92vw] max-w-2xl rounded-2xl bg-base-100 shadow-xl max-h-[85vh] overflow-hidden flex flex-col">
        {/* HEADER (fixed) */}
        <div className="p-5 border-b border-base-200 bg-primary text-primary-content flex items-center justify-between">
          <h2 className="text-2xl font-bold">{card ? "Edit Card" : "Add Card"}</h2>
          <button className="btn btn-ghost btn-sm btn-circle" onClick={onCancel} aria-label="Close modal">
            <FontAwesomeIcon icon={byPrefixAndName.fas.times} />
          </button>
        </div>

        {/* FIXED: stepper + preview */}
        <div className="border-b border-base-200 p-4 space-y-4">
          <Stepper step={step} />

          <div className="rounded-2xl border border-base-200 bg-base-300 p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm">
                <span className="font-semibold">{previewCard.name}</span>
                <span className="opacity-70"> (x{previewCard.count})</span>
              </div>
              <div className="text-sm opacity-70">{formatTypeLine(previewCard)}</div>
              <div className="text-sm">
                Mana Total:{" "}
                <span className="font-semibold tabular-nums">{getCardManaCount({ ...previewCard, count })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL AREA (only this scrolls) */}
        <div className="px-5 py-4 overflow-y-auto flex-1">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onSave({
                id: card?.id || Math.random().toString(36).slice(2),
                name: name.trim(),
                mana: mana.length > 0 ? mana : undefined,
                power,
                toughness,
                count,
                color,
                superType,
                type,
                subtype1: effectiveSubtype1 || undefined,
                subtype2: effectiveSubtype2 || undefined,
              });
            }}
          >
            {step === 0 && (
              <div className="space-y-4 flex flex-row gap-4">
                <fieldset className="fieldset flex-grow">
                  <legend className="fieldset-legend">Title</legend>
                  <input
                    name="title"
                    type="text"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label className="label">
                    <span className="label-text-alt opacity-70">You can edit card title later on.</span>
                  </label>
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Count</legend>
                  <input
                    name="count"
                    type="number"
                    min={1}
                    max={999}
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                    className="input input-bordered w-32"
                  />
                  <label className="label">
                    <span className="label-text-alt opacity-70">Min 1</span>
                  </label>
                </fieldset>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Supertype</legend>
                    <select
                      className="select select-bordered w-full"
                      value={superType as any}
                      onChange={(e) => setSuperType(e.target.value as any)}
                    >
                      {superTypeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Type</legend>
                    <select
                      className="select select-bordered w-full"
                      value={type as any}
                      onChange={(e) => setType(e.target.value as any)}
                    >
                      {typeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <SubtypePicker
                    label="Subtype 1"
                    picked={subtype1}
                    onPick={setSubtype1}
                    freeText={subtype1Free}
                    setFreeText={setSubtype1Free}
                  />
                  <SubtypePicker
                    label="Subtype 2"
                    picked={subtype2}
                    onPick={setSubtype2}
                    freeText={subtype2Free}
                    setFreeText={setSubtype2Free}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="rounded-2xl border border-base-200 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Mana</h3>
                  <div className="text-sm opacity-70">Tap to add, tap a pip below to remove</div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {manaOptions.map((m, idx) => (
                    <button key={m + idx} className="btn btn-sm btn-secondary" type="button" onClick={() => addMana(m)}>
                      {m}
                    </button>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {mana.length ? (
                    mana.map((m, idx) => (
                      <button key={m + idx} className="btn btn-xs btn-primary" type="button" onClick={() => removeMana(idx)}>
                        {m} ×
                      </button>
                    ))
                  ) : (
                    <span className="opacity-50">No mana set</span>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-base-200 p-4">
                    <div className="font-semibold mb-2">Power</div>
                    {groupedButtons(power, setPower)}
                  </div>
                  <div className="rounded-2xl border border-base-200 p-4">
                    <div className="font-semibold mb-2">Toughness</div>
                    {groupedButtons(toughness, setToughness)}
                  </div>
                </div>

                <div className="rounded-2xl border border-base-200 p-4">
                  <div className="font-semibold mb-2">Colour</div>
                  <div className="join flex flex-wrap">
                    {colorOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        className={`btn join-item btn-sm ${color === opt.value ? "btn-primary" : "btn-secondary"} ${opt.className}`}
                        onClick={() => setColor(opt.value)}
                      >
                        {opt.label}
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`btn join-item btn-sm ${color === undefined ? "btn-accent" : "btn-secondary"}`}
                      onClick={() => setColor(undefined)}
                      title="Unset colour"
                    >
                      —
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="rounded-2xl border border-base-200 p-4 space-y-3">
                <div className="text-sm opacity-70">Review</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-xl bg-base-200/40 p-3">
                    <div className="text-xs opacity-70">Name</div>
                    <div className="font-semibold">{previewCard.name}</div>
                  </div>
                  <div className="rounded-xl bg-base-200/40 p-3">
                    <div className="text-xs opacity-70">Count</div>
                    <div className="font-semibold">{previewCard.count}</div>
                  </div>

                  <div className="rounded-xl bg-base-200/40 p-3 md:col-span-2">
                    <div className="text-xs opacity-70">Type line</div>
                    <div className="font-semibold">{formatTypeLine(previewCard)}</div>
                  </div>

                  <div className="rounded-xl bg-base-200/40 p-3 md:col-span-2">
                    <div className="text-xs opacity-70">Mana</div>
                    <div className="font-semibold">{previewCard.mana?.length ? previewCard.mana.join(", ") : "—"}</div>
                    <div className="text-sm mt-1">
                      Mana Total: <span className="font-semibold tabular-nums">{getCardManaCount({ ...previewCard, count })}</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-base-200/40 p-3">
                    <div className="text-xs opacity-70">P/T</div>
                    <div className="font-semibold">
                      {previewCard.power !== undefined && previewCard.toughness !== undefined
                        ? `${previewCard.power}/${previewCard.toughness}`
                        : "—"}
                    </div>
                  </div>

                  <div className="rounded-xl bg-base-200/40 p-3">
                    <div className="text-xs opacity-70">Colour</div>
                    <div className="font-semibold">{previewCard.color ?? "—"}</div>
                  </div>
                </div>

                <div className="alert alert-info">
                  <span>
                    Happy with it? Hit <span className="font-semibold">Save</span>.
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* FOOTER (fixed) */}
        <div className="px-5 py-4 border-t border-base-200 bg-base-300">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" className="btn btn-ghost" onClick={onCancel}>
              Cancel
            </button>

            <div className="flex gap-2 justify-end">
              <button type="button" className="btn" onClick={goBack} disabled={step === 0}>
                Back
              </button>

              {step < 4 ? (
                <button type="button" className="btn btn-primary" onClick={goNext} disabled={!canNext}>
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    if (!name.trim()) return;
                    onSave({
                      id: card?.id || Math.random().toString(36).slice(2),
                      name: name.trim(),
                      mana: mana.length > 0 ? mana : undefined,
                      power,
                      toughness,
                      count,
                      color,
                      superType,
                      type,
                      subtype1: effectiveSubtype1 || undefined,
                      subtype2: effectiveSubtype2 || undefined,
                    });
                  }}
                  disabled={!name.trim()}
                >
                  {card ? "Save" : "Add"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModalForm;
