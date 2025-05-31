import React from "react";

const renderStyle = (tick) => {
  switch (tick) {
    case 0:
      return `${tick + 1.5}%`;

    case 20:
      return `${tick + 1}%`;

    case 40:
      return `${tick + 0.5}%`;

    case 100:
      return `${tick - 2}%`;

    default:
      return `${tick}%`;
  }
};

const ticks = [0, 20, 40, 60, 80, 100];

export const KPIProgressbar = ({ value }) => {
  return (
    <div className="w-full">
      {/* Outer border */}
      <div className="relative rounded-md border border-dime-form-grey p-1">
        {/* Inner background with padding gap */}
        <div className="relative h-2 w-full rounded-md bg-dime-outline-grey">
          {/* Tick lines */}
          <div className="absolute inset-0">
            {ticks.map((tick, i) => {
              if (tick === 0 || tick === 100) {
                return null;
              }
              return (
                <div
                  key={i}
                  className="absolute top-0 h-full w-px bg-gray-400/40"
                  style={{ left: `${tick}%`, transform: "translateX(-0.5px)" }}
                />
              );
            })}
          </div>

          {/* Progress fill */}
          <div
            className={`absolute left-0 top-0 z-0 h-full ${
              value === 100 ? "rounded" : "rounded-l-lg"
            } bg-dime-bright-pink transition-all duration-300`}
            style={{ width: `${value}%` }}
          />

          {/* Down caret at end of progress */}
          <div
            className="absolute -top-5 z-10 text-dime-bright-pink text-sm transition-all duration-300"
            style={{ left: `${value}%`, transform: "translateX(-50%)" }}>
            ▼
          </div>
        </div>
      </div>

      {/* Labels below */}
      <div className="relative mt-1 h-4 w-full">
        {ticks.map((tick, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 text-[8px] font-light text-black"
            style={{ left: renderStyle(tick) }}>
            {tick}%
          </div>
        ))}
      </div>
    </div>
  );
};
