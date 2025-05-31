import React from "react";

export const LegendWithCircle = ({ payload }) => {
  return (
    <div className="flex gap-6 p-1 border border-dime-outline-grey rounded justify-center flex-wrap text-sm font-semibold text-dime-body-grey">
      {payload.map((entry) => (
        <div key={entry.value} className="flex items-center">
          <svg width={16} height={16} className="mr-2">
            <circle cx={8} cy={8} r={8} fill={entry.color} />
          </svg>
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};
