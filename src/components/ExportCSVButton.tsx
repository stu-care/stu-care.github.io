import React from "react";
import { MTGCard } from "../pages/MagicHomePage";

interface ExportCSVButtonProps {
  cards: MTGCard[];
}

const ExportCSVButton: React.FC<ExportCSVButtonProps> = ({ cards }) => {
  return (
    <button
      className="btn btn-secondary"
      onClick={() => {
        const headers = [
          "name",
          "count",
          "mana",
          "power",
          "toughness",
          "color",
          "supertype",
          "type",
          "subtype1",
          "subtype2",
        ];
        const rows = cards.map((card) => [
          card.name,
          card.count,
          (card.mana || []).join(" "),
          card.power ?? "",
          card.toughness ?? "",
          card.color ?? "",
          card.superType ?? "",
          card.type ?? "",
          card.subtype1 ?? "",
          card.subtype2 ?? "",
        ]);
        const csv = [headers.join(","), ...rows.map((r) => r.map((x) => `"${String(x).replace(/"/g, '""')}"`).join(","))].join(
          "\n",
        );
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "mtg-cards.csv";
        a.click();
        URL.revokeObjectURL(url);
      }}
    >
      Export CSV
    </button>
  );
};

export default ExportCSVButton;
