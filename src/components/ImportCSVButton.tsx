import React from "react";
import { MTGCard, SuperType, CardType, superTypeOptions, typeOptions } from "../pages/MagicHomePage";

interface ImportCSVButtonProps {
  cards: MTGCard[];
  setCards: (cards: MTGCard[]) => void;
}

const ImportCSVButton: React.FC<ImportCSVButtonProps> = ({ cards, setCards }) => {
  return (
    <label className="btn btn-secondary cursor-pointer">
      Import CSV
      <input
        type="file"
        accept=".csv"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const text = await file.text();
          const lines = text.split(/\r?\n/).filter(Boolean);
          const [header, ...data] = lines;
          const idx = (header || "").split(",").map((h) => h.trim().toLowerCase());

          const col = (cols: string[], key: string) => {
            const i = idx.indexOf(key);
            return i >= 0 ? cols[i] : "";
          };

          const newCards: MTGCard[] = data.map((line) => {
            const cols = line.match(/("[^"]*"|[^,]+)/g)?.map((s) => s.replace(/^"|"$/g, "").replace(/""/g, '"')) || [];
            const superTypeRaw = col(cols, "supertype");
            const typeRaw = col(cols, "type");

            const st = (superTypeOptions as string[]).includes(superTypeRaw) ? (superTypeRaw as SuperType) : undefined;
            const t = (typeOptions as string[]).includes(typeRaw) ? (typeRaw as CardType) : undefined;

            return {
              id: Math.random().toString(36).slice(2),
              name: col(cols, "name") || "",
              count: Number(col(cols, "count") || 1),
              mana: (col(cols, "mana") || "").split(" ").filter(Boolean),
              power: col(cols, "power") ? Number(col(cols, "power")) : undefined,
              toughness: col(cols, "toughness") ? Number(col(cols, "toughness")) : undefined,
              color: (col(cols, "color") as MTGCard["color"]) || undefined,
              superType: st,
              type: t,
              subtype1: col(cols, "subtype1") || undefined,
              subtype2: col(cols, "subtype2") || undefined,
            };
          });

          setCards([...cards, ...newCards]);
        }}
      />
    </label>
  );
};

export default ImportCSVButton;
