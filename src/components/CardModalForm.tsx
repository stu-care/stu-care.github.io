import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
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
    keywordSuggestions,
} from "../pages/MagicHomePage";

interface CardModalFormProps {
    currentSearchTerm: string;
    open: boolean;
    card: MTGCard | null;
    onSave: (card: MTGCard) => void;
    onCancel: () => void;
}

type StepId = 0 | 1 | 2 | 3 | 4 | 5;


function normaliseSubtype(s: string) {
    return s.trim().replace(/\s+/g, " ");
}

function normaliseKeyword(s: string) {
    return normaliseSubtype(s).replace(/\b\w/g, (c) => c.toUpperCase());
}

function Stepper({ step }: { step: StepId }) {
    const labels = ["Basics", "Type line", "Mana", "Stats", "Keywords", "Review"];

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

function borderColourClass(c: MTGCard["colorShort"]) {
    switch (c) {
        case "W":
            return "border-yellow-200";
        case "U":
            return "border-blue-400";
        case "B":
            return "border-gray-500";
        case "R":
            return "border-red-400";
        case "G":
            return "border-green-500";
        case "M":
            return "border-purple-500";
        case "C":
            return "border-gray-300";
        default:
            return "border-base-300";
    }
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
                        setFreeText("");
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
                        <button type="button" className="btn btn-ghost btn-sm" onClick={() => setFreeText("")} disabled={!freeText.trim()}>
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

// --- helpers for mana keyboard input ---
const COLOUR_KEYS = new Set(["W", "U", "B", "R", "G"]);
const isNumericPip = (m: string) => /^\d+$/.test(m);

function digitToNumberPip(digit: number, shift: boolean) {
    // digits: 0-9. Base: 0-9. Shift: 10-19
    if (digit === 0) return shift ? 10 : 0;
    return shift ? 10 + digit : digit;
}

const CardModalForm: React.FC<CardModalFormProps> = ({ currentSearchTerm, open, card, onSave, onCancel }) => {
    const [step, setStep] = useState<StepId>(0);

    const [name, setName] = useState(card?.name || currentSearchTerm || "");
    const [mana, setMana] = useState<string[]>(card?.mana || []);
    const [power, setPower] = useState<number | undefined>(card?.power);
    const [toughness, setToughness] = useState<number | undefined>(card?.toughness);
    const [count, setCount] = useState(card?.count || 1);
    const [color, setColor] = useState<MTGCard["color"]>(card?.color || undefined);
    const [keywords, setKeywords] = useState<string[]>(card?.keywords || []);
    const [keywordInput, setKeywordInput] = useState("");

    const [superType, setSuperType] = useState<MTGCard["superType"]>(card?.superType || "None");
    const [type, setType] = useState<MTGCard["type"]>(card?.type || "None");

    const [subtype1, setSubtype1] = useState<string>(card?.subtype1 || "");
    const [subtype2, setSubtype2] = useState<string>(card?.subtype2 || "");

    const [subtype1Free, setSubtype1Free] = useState("");
    const [subtype2Free, setSubtype2Free] = useState("");

    // Stats keyboard flow (step 3)
    const [statTarget, setStatTarget] = useState<"power" | "toughness">("power");

    // Reset when opening a different card
    useEffect(() => {
        if (!open) return;
        setStatTarget("power");
    }, [open, card?.id]);

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
        setKeywords(card?.keywords || []);
        setKeywordInput("");

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

    // --- helpers for stats keyboard input ---
    const COLOUR_TO_CARD_COLOUR: Record<string, MTGCard["color"]> = {
        W: "white",
        U: "blue",
        B: "black",
        R: "red",
        G: "green",
        M: "multicoloured",
        C: "uncoloured",
    };

    useEffect(() => {
        if (!open) return;
        if (step !== 3) return;

        const isValidStat = (n: number) => n >= 1 && n <= 12;

        const onKeyDown = (e: KeyboardEvent) => {
            // don’t steal shortcuts (Cmd/Ctrl+Enter handled elsewhere)
            if (e.metaKey || e.ctrlKey || e.altKey) return;

            const target = e.target as HTMLElement | null;
            const tag = target?.tagName?.toLowerCase();
            const isTyping =
                tag === "input" ||
                tag === "textarea" ||
                tag === "select" ||
                (target as any)?.isContentEditable;
            if (isTyping) return;

            // Backspace clears most recent stat (Toughness first, then Power)
            if (e.key === "Backspace") {
                e.preventDefault();
                if (toughness !== undefined) {
                    setToughness(undefined);
                    setStatTarget("toughness");
                } else if (power !== undefined) {
                    setPower(undefined);
                    setStatTarget("power");
                }
                return;
            }

            // Colour letters (repeatable, just overwrites colour)
            const k = e.key.toUpperCase();
            if (k in COLOUR_TO_CARD_COLOUR) {
                e.preventDefault();
                setColor(COLOUR_TO_CARD_COLOUR[k]);
                return;
            }

            // X clears colour
            if (k === "X") {
                e.preventDefault();
                setColor(undefined);
                return;
            }

            // Numbers (use e.code so Shift+1 still registers as Digit1 etc)
            const readDigit = (): number | null => {
                if (/^Digit[0-9]$/.test(e.code)) return Number(e.code.replace("Digit", ""));
                if (/^Numpad[0-9]$/.test(e.code)) return Number(e.code.replace("Numpad", ""));
                return null;
            };

            const digit = readDigit();
            if (digit !== null) {
                const n = digitToNumberPip(digit, e.shiftKey); // reuses your existing helper

                // For stats, only accept 1-12
                if (!isValidStat(n)) return;

                e.preventDefault();

                if (statTarget === "power") {
                    setPower(n);
                    setStatTarget("toughness");
                } else {
                    setToughness(n);
                    setStatTarget("power");
                }
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, step, statTarget, power, toughness, setPower, setToughness, setColor]);


    // Mana
    const addMana = (m: string) => setMana((prev) => [...prev, m]);
    const removeMana = (idx: number) => setMana((prev) => prev.filter((_, i) => i !== idx));

    const hasNumeric = useMemo(() => mana.some(isNumericPip), [mana]);

    const addNumericPip = useCallback(
        (n: number) => {
            setMana((prev) => {
                // only allow one numeric pip at a time
                if (prev.some(isNumericPip)) return prev;
                return [...prev, String(n)];
            });
        },
        [setMana],
    );

    const addColourPip = useCallback(
        (c: string) => {
            setMana((prev) => [...prev, c]);
        },
        [setMana],
    );

    const removeLastPip = useCallback(() => {
        setMana((prev) => (prev.length ? prev.slice(0, -1) : prev));
    }, []);

    const clearNumericPip = useCallback(() => {
        setMana((prev) => prev.filter((m) => !isNumericPip(m)));
    }, []);

    // Keyboard mana input (only on step 2)
    useEffect(() => {
        if (!open) return;
        if (step !== 2) return;

        const onKeyDown = (e: KeyboardEvent) => {
            // don’t steal shortcuts (Cmd/Ctrl+Enter handled elsewhere)
            if (e.metaKey || e.ctrlKey || e.altKey) return;

            const target = e.target as HTMLElement | null;
            const tag = target?.tagName?.toLowerCase();
            const isTyping =
                tag === "input" ||
                tag === "textarea" ||
                tag === "select" ||
                (target as any)?.isContentEditable;
            if (isTyping) return;

            // Backspace removes last pip
            if (e.key === "Backspace") {
                e.preventDefault();
                removeLastPip();
                return;
            }

            // Escape clears numeric pip (optional QoL)
            if (e.key === "Escape") {
                // let your existing Escape-to-close still work; we won't preventDefault here
                clearNumericPip();
                return;
            }

            // digits 0-9 (use e.code so Shift+1 still registers as Digit1 etc)
            if (/^Digit[0-9]$/.test(e.code)) {
                const digit = Number(e.code.replace("Digit", "")); // Digit0 => 0
                const n = digitToNumberPip(digit, e.shiftKey);

                // enforce single numeric pip rule
                if (hasNumeric) return;

                e.preventDefault();
                addNumericPip(n);
                return;
            }

            // Optional: numpad digits too (nice to have, not relied upon)
            if (/^Numpad[0-9]$/.test(e.code)) {
                const digit = Number(e.code.replace("Numpad", ""));
                const n = digitToNumberPip(digit, e.shiftKey);

                if (hasNumeric) return;

                e.preventDefault();
                addNumericPip(n);
                return;
            }

            // W/U/B/R/G (repeatable)
            const k = e.key.toUpperCase();
            if (COLOUR_KEYS.has(k)) {
                e.preventDefault();
                addColourPip(k);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, step, hasNumeric, addNumericPip, addColourPip, removeLastPip, clearNumericPip]);


    // Grouped buttons for power/toughness
    const groupedButtons = (value: number | undefined, setValue: (v: number | undefined) => void, setAutofocus: boolean = false) => (
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-1">
            <button
                className={`btn btn-xs ${value === undefined ? "btn-secondary" : ""}`}
                onClick={(e) => {
                    e.preventDefault();
                    setValue(undefined);
                }}
                type="button"
                autoFocus={setAutofocus}
            >
                -
            </button>
            {[...Array(19)].map((_, i) => (
                <button
                    key={i + 1}
                    className={`btn btn-xs ${value === i + 1 ? "btn-secondary" : ""}`}
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
        { value: "uncoloured", label: "Un", className: "" },
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
            keywords: keywords.length ? keywords : undefined,
        }),
        [card?.id, name, count, mana, power, toughness, color, superType, type, effectiveSubtype1, effectiveSubtype2, keywords],
    );

    const canNext = useMemo(() => {
        if (step === 0) return name.trim().length > 0 && count >= 1;
        return true;
    }, [step, name, count]);

    const goNext = useCallback(() => setStep((s) => (s < 5 ? ((s + 1) as StepId) : s)), []);
    const goBack = useCallback(() => setStep((s) => (s > 0 ? ((s - 1) as StepId) : s)), []);

    const saveCurrent = useCallback(() => {
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
            keywords: keywords.length ? keywords : undefined,
        });
    }, [onSave, card?.id, name, mana, power, toughness, count, color, superType, type, effectiveSubtype1, effectiveSubtype2, keywords]);

    // Cmd/Ctrl + Enter: next step (0-3), save on step 4
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            const isCmdEnter = (e.metaKey || e.ctrlKey) && e.key === "Enter";
            if (!isCmdEnter) return;

            e.preventDefault();

            if (step < 5) {
                if (!canNext) return;
                goNext();
                return;
            }

            saveCurrent();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, step, canNext, goNext, saveCurrent]);

    if (!open) return null;

    return (
        <div ref={modalBgRef} onClick={handleModalBgClick} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
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
                                Mana Total: <span className="font-semibold tabular-nums">{getCardManaCount({ ...previewCard, count })}</span>
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
                            saveCurrent();
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
                                        autoFocus={true}
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
                                            autoFocus={true}

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
                                </div>

                                {/* Keyboard hint panel */}
                                <div className="mt-3 rounded-xl bg-base-200/40 p-3 text-sm flex flex-col gap-2 align-center justify-center">
                                    <div className="font-bold mb-1">Keyboard shortcuts</div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <div className="font-semibold">Numbers (One per Card)</div>
                                            <div><kbd className="kbd">0</kbd> - <kbd className="kbd">9</kbd> → 0 → 9</div>
                                            <div><kbd className="kbd">⇧</kbd> + <kbd className="kbd">0</kbd> - <kbd className="kbd">⇧</kbd> + <kbd className="kbd">9</kbd> → 10 - 19</div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="font-semibold">Colours (Repeatable)</div>
                                            <div><kbd className={`${borderColourClass("W")} kbd`}>W</kbd> <kbd className={`${borderColourClass("U")} kbd`}>U</kbd> <kbd className={`${borderColourClass("B")} kbd`}>B</kbd> <kbd className={`${borderColourClass("R")} kbd`}>R</kbd> <kbd className={`${borderColourClass("G")} kbd`}>G</kbd></div>
                                        </div>
                                    </div>
                                    <div className="text-neutral/50 text-xs text-center">Press multiple times to add multiple pips.<br />Backspace removes last pip</div>
                                </div>

                                {/* Existing click-to-add buttons (kept) */}
                                <div className="mt-3 grid grid-cols-13 gap-2 items-center justify-center">
                                    {manaOptions.map((m, idx) => (
                                        <button
                                            key={m + idx}
                                            className="btn btn-xs"
                                            type="button"
                                            onClick={() => {
                                                // enforce numeric-only-once rule for clicks too
                                                if (isNumericPip(m) && mana.some(isNumericPip)) return;
                                                addMana(m);
                                            }}
                                            title={isNumericPip(m) ? (mana.some(isNumericPip) ? "Numeric pip already set (remove it first)" : "Add numeric pip") : "Add pip"}
                                        >
                                            {m}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                                    {mana.length ? (
                                        mana.map((m, idx) => (
                                            <button key={m + idx} className="btn btn-xs btn-secondary" type="button" onClick={() => removeMana(idx)}>
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
                                <div className="mt-3 rounded-xl bg-base-200/40 p-3 text-sm flex flex-col gap-2 align-center justify-center">
                                    <div className="font-bold mb-1">Keyboard shortcuts</div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <div className="font-semibold">Numbers (1st: Power, 2nd: Toughness)</div>
                                            <div><kbd className="kbd">0</kbd> - <kbd className="kbd">9</kbd> → 0 → 9</div>
                                            <div><kbd className="kbd">⇧</kbd> + <kbd className="kbd">0</kbd> - <kbd className="kbd">⇧</kbd> + <kbd className="kbd">9</kbd> → 10 - 19</div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="font-semibold">Colours (Repeatable)</div>
                                            <div><kbd className={`${borderColourClass("W")} kbd`}>W</kbd> <kbd className={`${borderColourClass("U")} kbd`}>U</kbd> <kbd className={`${borderColourClass("B")} kbd`}>B</kbd> <kbd className={`${borderColourClass("R")} kbd`}>R</kbd> <kbd className={`${borderColourClass("G")} kbd`}>G</kbd> <kbd className={`${borderColourClass("M")} kbd`}>M</kbd> <kbd className={`${borderColourClass("C")} kbd`}>C</kbd></div>
                                        </div>
                                    </div>
                                    <div className="text-neutral/50 text-xs text-center">Press multiple times to add multiple pips.<br />Backspace removes last pip</div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="rounded-2xl border border-base-200 p-4">
                                        <div className="font-semibold mb-2">Power</div>
                                        {groupedButtons(power, setPower, true)}
                                    </div>
                                    <div className="rounded-2xl border border-base-200 p-4">
                                        <div className="font-semibold mb-2">Toughness</div>
                                        {groupedButtons(toughness, setToughness)}
                                    </div>
                                </div>



                                <div className="rounded-2xl border border-base-200 p-4">
                                    <div className="font-semibold mb-2">Colour</div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 items-center justify-center">
                                        {colorOptions.map((opt) => (
                                            <button
                                                key={opt.value}
                                                type="button"
                                                className={`btn btn-xs ${color === opt.value ? "btn-secondary" : ""} ${opt.className}`}
                                                onClick={() => setColor(opt.value)}
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                        <button
                                            type="button"
                                            className={`btn btn-xs ${color === undefined ? "btn-secondary" : ""}`}
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
  <div className="space-y-4">
    <div className="rounded-2xl border border-base-200 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="font-semibold">Keywords</div>
        <div className="text-sm opacity-70">{keywords.length ? `${keywords.length} selected` : "None"}</div>
      </div>

      {/* Keyboard hint */}
      <div className="rounded-xl bg-base-200/40 p-3 text-sm flex flex-col gap-2">
        <div className="font-bold">Keyboard shortcuts</div>
        <div className="text-sm">
          Type a keyword and press <kbd className="kbd">Enter</kbd> to add. Use <kbd className="kbd">Backspace</kbd> on an empty input to remove the last keyword.
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          className="input input-bordered w-full"
          placeholder="e.g. Flying, Trample…"
          value={keywordInput}
          onChange={(e) => setKeywordInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const v = normaliseKeyword(keywordInput.trim());
              if (!v) return;
              setKeywords((prev) => (prev.includes(v) ? prev : [...prev, v]));
              setKeywordInput("");
              return;
            }

            if (e.key === "Backspace" && !keywordInput.trim()) {
              setKeywords((prev) => (prev.length ? prev.slice(0, -1) : prev));
            }
          }}
          autoFocus
        />

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            const v = normaliseKeyword(keywordInput.trim());
            if (!v) return;
            setKeywords((prev) => (prev.includes(v) ? prev : [...prev, v]));
            setKeywordInput("");
          }}
          disabled={!keywordInput.trim()}
        >
          Add
        </button>

        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            setKeywords([]);
            setKeywordInput("");
          }}
          disabled={!keywords.length && !keywordInput.trim()}
        >
          Clear
        </button>
      </div>

      {/* Suggestions */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {keywordSuggestions.map((k) => {
          const picked = keywords.includes(k);
          return (
            <button
              key={k}
              type="button"
              className={`btn btn-xs ${picked ? "btn-secondary" : ""}`}
              onClick={() => {
                setKeywords((prev) => (prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]));
              }}
              title={picked ? "Remove" : "Add"}
            >
              {k}
            </button>
          );
        })}
      </div>

      {/* Selected */}
      <div className="flex flex-wrap gap-2 justify-center">
        {keywords.length ? (
          keywords.map((k) => (
            <button
              key={k}
              type="button"
              className="btn btn-xs btn-secondary"
              onClick={() => setKeywords((prev) => prev.filter((x) => x !== k))}
              title="Remove keyword"
            >
              {k} ×
            </button>
          ))
        ) : (
          <span className="opacity-50">No keywords set</span>
        )}
      </div>
    </div>
  </div>
)}

                        {step === 5 && (
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

                                    <div className="rounded-xl bg-base-200/40 p-3 md:col-span-2">
  <div className="text-xs opacity-70">Keywords</div>
  <div className="font-semibold">{previewCard.keywords?.length ? previewCard.keywords.join(", ") : "—"}</div>
</div>
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

                            {step < 5 ? (
                                <button type="button" className="btn btn-primary" onClick={goNext} disabled={!canNext}>
                                    Next <kbd className="kbd bg-base-100/20">⌘</kbd><kbd className="kbd bg-base-100/20">⏎</kbd>
                                </button>
                            ) : (
                                <button type="button" className="btn btn-primary" onClick={saveCurrent} disabled={!name.trim()}>
                                    {card ? "Save" : "Add"} <kbd className="kbd bg-base-100/20">⌘</kbd><kbd className="kbd bg-base-100/20">⏎</kbd>
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