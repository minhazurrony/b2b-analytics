import React from "react";

export const LegendWithLines = ({
  payload = [],
  labelMap = {},
  className = "",
}) => {
  return (
    <div
      className={`flex flex-wrap justify-center gap-3 rounded-sm border border-dime-outline-grey p-1 ${className}`}>
      {payload.map(({ value, color }) => {
        const label = labelMap[value] || value;

        return (
          <div key={value} className="flex items-center cursor-pointer">
            <svg width={32} height={10} className="mr-2">
              <line
                x1={0}
                y1={5}
                x2={32}
                y2={5}
                stroke={color}
                strokeWidth={3}
              />
            </svg>
            <span className="text-sm font-semibold text-dime-body-grey">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
