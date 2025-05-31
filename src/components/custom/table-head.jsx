import React from "react";
import { TableHead } from "@/components/ui/table";

export const CustomTableHead = ({
  label,
  extraLabel,
  isFirstHeader = false,
}) => {
  return (
    <TableHead className="text-sm font-medium uppercase align-bottom">
      <div
        className={
          isFirstHeader
            ? "w-fit text-left py-4"
            : "w-fit m-auto text-right py-4"
        }>
        {extraLabel && (
          <p className="uppercase text-dime-light-purple text-xs font-medium">
            {extraLabel}
          </p>
        )}
        <p>{label}</p>
      </div>
    </TableHead>
  );
};
