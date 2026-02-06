import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { MTGCard, formatTypeLine, colourBadgeClass, getCardManaCount } from "../pages/MagicHomePage";

interface CardTableProps {
  filteredCards: MTGCard[];
  increaseCount: (id: string) => void;
  decreaseCount: (id: string) => void;
  removeCard: (id: string) => void;
  openEditModal: (card: MTGCard) => void;
}

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100, 200];

const CardTable: React.FC<CardTableProps> = ({
  filteredCards,
  increaseCount,
  decreaseCount,
  removeCard,
  openEditModal,
}) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);

  const totalPages = Math.max(1, Math.ceil(filteredCards.length / pageSize));

  // Clamp page if search/page size changes
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pagedCards = useMemo(
    () => filteredCards.slice((page - 1) * pageSize, page * pageSize),
    [filteredCards, page, pageSize],
  );

  return (
    <div className="rounded-2xl bg-base-100 shadow">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="w-[130px] text-center">Count</th>
              <th>Name</th>
              <th className="min-w-[220px]">Type</th>
              <th className="min-w-[170px]">Mana</th>
              <th className="w-[100px] text-center">P/T</th>
              <th className="w-[120px] text-center">Mana Total</th>
              <th className="w-[110px] text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {pagedCards.length === 0 ? (
              <tr>
                <td colSpan={7}>
                  <div className="py-10 text-center opacity-70">No cards found.</div>
                </td>
              </tr>
            ) : (
              pagedCards.map((card) => (
                <tr key={card.id} onClick={(e) => {openEditModal(card);}} className="cursor-pointer hover:bg-base-200">
                  <td>
                    <div className="flex justify-center items-center gap-2">
                      <button
                        className="btn btn-secondary btn-soft btn-xs btn-circle"
                        onClick={(e) => {e.stopPropagation(); decreaseCount(card.id)}}
                        aria-label="Decrease count"
                      >
                        <FontAwesomeIcon icon={byPrefixAndName.fas.minus} />
                      </button>
                      <span className="font-semibold tabular-nums">{card.count}</span>
                      <button
                        className="btn btn-secondary btn-soft btn-xs btn-circle"
                        onClick={(e) => {e.stopPropagation(); increaseCount(card.id)}}
                        aria-label="Increase count"
                      >
                        <FontAwesomeIcon icon={byPrefixAndName.fas.plus} />
                      </button>
                    </div>
                  </td>

                  <td>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{card.name}</span>
                      {card.color && (
                        <span className={`badge ${colourBadgeClass(card.color)}`}>
                          {card.color === "uncoloured" ? "Colourless" : card.color}
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="opacity-80">{formatTypeLine(card)}</td>

                  <td>
                    <div className="flex flex-wrap gap-1">
                      {card.mana && card.mana.length > 0 ? (
                        card.mana.map((m, i) => (
                          <span key={`${m}-${i}`} className="badge badge-outline">
                            {m}
                          </span>
                        ))
                      ) : (
                        <span className="opacity-50">-</span>
                      )}
                    </div>
                  </td>

                  <td className="text-center opacity-80">
                    {card.power !== undefined && card.toughness !== undefined ? (
                      <span className="font-mono">
                        {card.power}/{card.toughness}
                      </span>
                    ) : (
                      <span className="opacity-50">-</span>
                    )}
                  </td>

                  <td className="text-center font-semibold tabular-nums">{getCardManaCount(card)}</td>

                  <td>
                    <div className="flex justify-center items-center gap-2">
                      <button
                        className="btn btn-info btn-soft btn-xs btn-circle"
                        onClick={(e) => {e.stopPropagation(); openEditModal(card);}}
                        aria-label="Edit card"
                      >
                        <FontAwesomeIcon icon={byPrefixAndName.fas.edit} />
                      </button>
                      <button
                        className="btn btn-error btn-soft btn-xs btn-circle"
                        onClick={(e) => {e.stopPropagation(); removeCard(card.id);}}
                        aria-label="Remove card"
                      >
                        <FontAwesomeIcon icon={byPrefixAndName.fas["trash-alt"]} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls (styled to match the card-like layout) */}
      {filteredCards.length > 0 && (
        <div className="p-4 border-t border-base-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="text-sm opacity-70 hidden sm:block">Page</div>

            <div className="join">
              <button
                className="btn btn-xs join-item"
                onClick={() => setPage(1)}
                disabled={page === 1}
                title="First page"
                aria-label="First page"
              >
                <FontAwesomeIcon icon={byPrefixAndName.fas["angle-double-left"]} />
              </button>

              <button
                className="btn btn-xs join-item"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                title="Previous page"
                aria-label="Previous page"
              >
                <FontAwesomeIcon icon={byPrefixAndName.fas["chevron-left"]} />
              </button>

              <select
                className="select select-xs join-item"
                value={page}
                onChange={(e) => setPage(Number(e.target.value))}
                aria-label="Select page"
              >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>

              <button className="btn btn-xs join-item btn-disabled pointer-events-none" aria-hidden="true">
                of {totalPages}
              </button>

              <button
                className="btn btn-xs join-item"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                title="Next page"
                aria-label="Next page"
              >
                <FontAwesomeIcon icon={byPrefixAndName.fas["chevron-right"]} />
              </button>

              <button
                className="btn btn-xs join-item"
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages}
                title="Last page"
                aria-label="Last page"
              >
                <FontAwesomeIcon icon={byPrefixAndName.fas["angle-double-right"]} />
              </button>
            </div>

            <div className="text-sm opacity-70 ml-2 hidden md:block">
              Showing{" "}
              <span className="font-semibold tabular-nums">
                {(page - 1) * pageSize + 1}
              </span>
              {"–"}
              <span className="font-semibold tabular-nums">
                {Math.min(page * pageSize, filteredCards.length)}
              </span>{" "}
              of{" "}
              <span className="font-semibold tabular-nums">
                {filteredCards.length}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 justify-between sm:justify-end">
            <div className="text-sm opacity-70">Per page</div>
            <select
              className="select select-xs"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              aria-label="Select page size"
            >
              {PAGE_SIZE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardTable;
