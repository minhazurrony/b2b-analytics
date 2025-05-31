import React from "react";

export const KPIAccordionStats = ({ stats }) => {
  return (
    <>
      <div>
        <p className="text-xs text-dime-dark-grey font-normal leading-[150%]">
          Median
        </p>
        <p className="text-base text-dime-title-purple font-semibold leading-[175%]">
          {`$${stats.median.toLocaleString()}`}
        </p>
      </div>
      <div>
        <p className="text-xs text-dime-dark-grey font-normal leading-[150%]">
          Rank
        </p>
        <p className="text-base text-dime-title-purple font-semibold leading-[175%]">
          {stats.rank}
        </p>
      </div>
      <div>
        <p className="text-xs text-dime-dark-grey font-normal leading-[150%]">
          Percentile
        </p>
        <p className="text-base text-dime-title-purple font-semibold leading-[175%]">
          {`${stats.percentile}%`}
        </p>
      </div>
    </>
  );
};
