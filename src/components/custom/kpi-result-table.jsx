"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { CustomTableHead } from "@/components/custom/table-head";
import { TableLoader } from "./table-loader";
import { useApi } from "@/hooks/use-api";

export const KPIResultTable = () => {
  const { data: kpiData, isLoading } = useApi("/kpi-results");

  if (isLoading || !kpiData.length) {
    return <TableLoader />;
  }

  return (
    <>
      <Table className="w-full">
        <TableHeader className="text-dime-dark-grey border-b-dime-body-grey">
          <TableRow>
            <CustomTableHead label="parameter" isFirstHeader={true} />
            <CustomTableHead label="nov 2021" extraLabel="result" />
            <CustomTableHead label=" oct 2021" />
            <CustomTableHead label="vs Oct 2021" extraLabel="trend" />
            <CustomTableHead label="median" />
            <CustomTableHead label="percentile" extraLabel="trend" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {kpiData.map((kpi, index) => (
            <React.Fragment key={kpi.title}>
              <TableRow key={kpi.title} className="border-b-dime-light-grey">
                <TableCell colSpan={1} className="pt-6 pb-2 text-left">
                  <span className="text-sm font-semibold text-dime-dark-grey">
                    {kpi.title}
                  </span>
                </TableCell>
              </TableRow>
              {kpiData[index].rows.map((row, idx) => {
                return (
                  <TableRow
                    key={idx}
                    className="border-t-dime-light-grey border-b-dime-light-grey p-5">
                    <TableCell className="text-sm font-light text-dime-dark-grey whitespace-nowrap">
                      {row.parameter}
                    </TableCell>
                    <TableCell className="text-sm font-light text-center text-dime-dark-grey">
                      {row.nov}
                    </TableCell>
                    <TableCell className="text-sm font-light text-center text-dime-dark-grey">
                      {row.oct}
                    </TableCell>
                    <TableCell
                      className={`text-sm text-center font-light ${
                        row.trend.startsWith("-")
                          ? "text-dime-error-red"
                          : "text-dime-good-green"
                      }`}>
                      {row.trend}
                    </TableCell>
                    <TableCell className="text-sm text-center font-light text-dime-dark-grey">
                      {row.median}
                    </TableCell>
                    <TableCell className="text-sm text-center">
                      <div className="flex justify-center gap-0.5 rounded border border-dime-outline-grey w-40 m-auto">
                        {[1, 2, 3, 4, 5].map((p) => (
                          <div
                            key={p}
                            className={`w-6 h-6 text-xs font-light flex items-center justify-center ${
                              row.percentile === p
                                ? "bg-dime-form-grey text-white font-bold"
                                : "text-dime-dark-grey"
                            }`}>
                            {p}
                          </div>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <p className="text-[10px] text-dime-body-grey mt-2 ml-2">
        * For this metric, a result below target is favorable.
      </p>
    </>
  );
};
