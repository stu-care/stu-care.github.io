import React, { useState, useEffect, useRef, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import CardModalForm from "../components/CardModalForm";
import CardTable from "../components/CardTable";
import ExportCSVButton from "../components/ExportCSVButton";
import ImportCSVButton from "../components/ImportCSVButton";
import { useApp } from "../contexts/AppContext";

export type SuperType =
  | "Basic"
  | "Legendary"
  | "Snow"
  | "World"
  | "Ongoing"
  | "Token"
  | "Elite"
  | "None";

export type CardType =
  | "Creature"
  | "Sorcery"
  | "Instant"
  | "Artifact"
  | "Enchantment"
  | "Planeswalker"
  | "Land"
  | "Battle"
  | "Tribal"
  | "None";

export type MTGCard = {
  id: string;
  name: string;

  // Type line parts (categorical-ish)
  superType?: SuperType; // e.g. Legendary
  type?: CardType; // e.g. Creature
  subtype1?: string; // e.g. Elf
  subtype2?: string; // e.g. Druid

  mana?: string[];
  power?: number;
  toughness?: number;
  count: number;
  color?: "white" | "red" | "blue" | "green" | "black" | "multicoloured" | "uncoloured";
};

export const superTypeOptions: SuperType[] = ["None", "Basic", "Legendary", "Snow", "World", "Ongoing", "Token", "Elite"];
export const typeOptions: CardType[] = [
  "None",
  "Creature",
  "Sorcery",
  "Instant",
  "Artifact",
  "Enchantment",
  "Planeswalker",
  "Land",
  "Battle",
  "Tribal",
];

// Light suggestions (kept small on purpose (big subtype lists get unwieldy))
export const subtypeSuggestions = [
  "Angel",
  "Artifact",
  "Aura",
  "Beast",
  "Cleric",
  "Dragon",
  "Druid",
  "Elf",
  "Equipment",
  "Goblin",
  "Human",
  "Knight",
  "Merfolk",
  "Rat",
  "Squirrel",
  "Soldier",
  "Vampire",
  "Warrior",
  "Wizard",
  "Zombie",
  "Forest",
  "Island",
  "Mountain",
  "Plains",
  "Swamp",
];

export const manaOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "W", "U", "B", "R", "G"];

export function formatTypeLine(card: MTGCard) {
  const st = card.superType && card.superType !== "None" ? `${card.superType} ` : "";
  const t = card.type && card.type !== "None" ? card.type : "";
  const subs = [card.subtype1, card.subtype2].filter(Boolean).join(" ");
  const dash = subs ? ` — ${subs}` : "";
  const base = `${st}${t}`.trim();
  return base ? `${base}${dash}` : "—";
}

export function colourBadgeClass(c?: MTGCard["color"]) {
  switch (c) {
    case "white":
      return "badge-outline";
    case "blue":
      return "badge-info";
    case "black":
      return "badge-neutral";
    case "red":
      return "badge-error";
    case "green":
      return "badge-success";
    case "multicoloured":
      return "badge-warning";
    case "uncoloured":
      return "badge-ghost";
    default:
      return "badge-ghost";
  }
}

// Utility to calculate mana count for a card
export function getCardManaCount(card: MTGCard | null | undefined): number {
  if (!card || !card.mana || card.mana.length === 0) return 0;
  return (
    card.mana.reduce((acc, m) => {
      const n = parseInt(m, 10);
      if (!isNaN(n)) return acc + n;
      return acc + 1;
    }, 0) * (card.count || 1)
  );
}

const MagicHomePage = () => {
  const [cards, setCards] = useLocalStorage<MTGCard[]>("mtg-cards", []);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editCard, setEditCard] = useState<MTGCard | null>(null);
  const { pageTitle, setters } = useApp();

  setters.pageTitle();

  // Fuzzy search: left-to-right
  const fuzzyMatch = (cardName: string, searchTerm: string) => {
    if (!searchTerm) return true;
    const cleanName = cardName.replace(/\s+/g, "").toLowerCase();
    const cleanSearch = searchTerm.replace(/\s+/g, "").toLowerCase();
    const regex = new RegExp(cleanSearch.split("").join(".*"), "i");
    return regex.test(cleanName);
  };

  const filteredCards = useMemo(() => cards.filter((card) => fuzzyMatch(card.name, search)), [cards, search]);

  // Table actions
  const increaseCount = (id: string) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, count: card.count + 1 } : card)));
  };
  const decreaseCount = (id: string) => {
    setCards(
      cards.flatMap((card) => {
        if (card.id === id) {
          if (card.count > 1) return { ...card, count: card.count - 1 };
          return [];
        }
        return card;
      }),
    );
  };
  const removeCard = (id: string) => {
    setCards(cards.filter((card) => card.id !== id));
  };
  const openEditModal = (card: MTGCard) => {
    setEditCard(card);
    setModalOpen(true);
  };

  // Modal backdrop and esc close logic
  const modalBgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
        setEditCard(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalOpen]);

  const handleModalBgClick = (e: React.MouseEvent) => {
    if (e.target === modalBgRef.current) {
      setModalOpen(false);
      setEditCard(null);
    }
  };

  return (
    <main className="p-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 rounded-2xl bg-base-100 shadow p-4">
          <div className="flex flex-col sm:flex-row gap-3 md:flex-row md:items-center md:justify-between">
           <div>
              <h1 className="text-2xl font-bold">MTG Card Tracker</h1>
              <p className="text-sm opacity-70">Track counts, mana, and the card type line.</p>
            </div>

            <div className="ml-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
              <label className="input input-bordered flex items-center gap-2">
                <FontAwesomeIcon icon={byPrefixAndName.fas.search} />
                <input
                  type="text"
                  className="grow"
                  placeholder="Search cards…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search cards"
                />
              </label>

              <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
                <FontAwesomeIcon icon={byPrefixAndName.fas.plus} />
                Add Card
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-base-300 shadow">
          <CardTable
            filteredCards={filteredCards}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
            removeCard={removeCard}
            openEditModal={openEditModal}
          />
          <div className="p-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <ExportCSVButton cards={cards} />
            <ImportCSVButton cards={cards} setCards={setCards} />
          </div>
        </div>

        {/* Add/Edit Card Modal */}
        {modalOpen && (
          <CardModalForm
            open={modalOpen}
            card={editCard}
            onSave={(card) => {
              if (editCard) setCards(cards.map((c) => (c.id === card.id ? card : c)));
              else setCards([...cards, card]);
              setModalOpen(false);
              setEditCard(null);
            }}
            onCancel={() => {
              setModalOpen(false);
              setEditCard(null);
            }}
          />
        )}
      </div>
    </main>
  );
};

// Card Modal Form Component


export default MagicHomePage;
