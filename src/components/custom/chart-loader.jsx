import React from "react";
import { Skeleton } from "../ui/skeleton";

export const ChartLoader = () => {
  return (
    <div className="h-[350px]">
      <div className="h-full w-full space-y-2">
        <Skeleton className="h-[80%] w-full rounded-lg" />
        <Skeleton className="h-4 w-[30%] mx-auto my-4 rounded" />
      </div>
    </div>
  );
};
