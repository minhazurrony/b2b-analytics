import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export const TableLoader = () => {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <TableCell key={idx}>
                <Skeleton className="h-4 w-full" />
              </TableCell>
            ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(5)
          .fill(0)
          .map((_, rowIdx) => (
            <TableRow key={rowIdx}>
              {Array(6)
                .fill(0)
                .map((_, cellIdx) => (
                  <TableCell key={cellIdx}>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
