"use client";
import { AnalysisStatsCard } from "./analysis-stats-card";
import { useState, useEffect } from "react";

export const AnalysisStatsSection = () => {
  const [data, setData] = useState({ analysis: [] });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/breakeven-analysis`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.analysis.map((column, colIdx) => (
        <div key={column.id} className="flex flex-col gap-4 h-[350px]">
          {column.cards.map((card, cardIdx) => {
            const isFullHeight = column.cards.length === 1;
            const isColumn3 = colIdx === 2 && column.cards.length === 2;

            const heightClass = isFullHeight
              ? "h-full"
              : isColumn3
              ? "h-[50%]"
              : cardIdx === 0
              ? "h-[65%]"
              : "h-[35%]";

            return (
              <div key={cardIdx} className={heightClass}>
                <AnalysisStatsCard
                  title={card.title}
                  value={
                    typeof card.value === "number"
                      ? `$${card.value.toLocaleString()}`
                      : card.value
                  }
                  description={card.description}
                  className="h-full"
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
