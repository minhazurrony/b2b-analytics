import { CustomTableHead } from "@/components/custom/table-head";
import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import React from "react";

const sections = [
  {
    title: "Profitability",
    rows: [
      {
        parameter: "Total Revenue",
        nov: "$329,397",
        oct: "$328,739",
        trend: "+0.2%",
        median: "$373,063",
        percentile: 1,
      },
      {
        parameter: "Gross Profit Margin",
        nov: "58.45%",
        oct: "61.68%",
        trend: "-3.23%",
        median: "45.88%",
        percentile: 2,
      },
      {
        parameter: "Profitability Ratio",
        nov: "58.45%",
        oct: "61.68%",
        trend: "-3.23%",
        median: "45.88%",
        percentile: 3,
      },
      {
        parameter: "Net Profit After Tax Margin",
        nov: "58.45%",
        oct: "61.68%",
        trend: "-3.23%",
        median: "45.88%",
        percentile: 4,
      },
      {
        parameter: "Wages as a % of Sales",
        nov: "58.45%",
        oct: "61.68%",
        trend: "-3.23%",
        median: "45.88%",
        percentile: 5,
      },
      {
        parameter: "Rent as a % of Sales *",
        nov: "58.45%",
        oct: "61.68%",
        trend: "-3.23%",
        median: "45.88%",
        percentile: 3,
      },
    ],
  },
  {
    title: "Membership",
    rows: [
      {
        parameter: "Number of Members",
        nov: "2,087",
        oct: "1,990",
        trend: "97",
        median: "1,272",
        percentile: 3,
      },
      {
        parameter: "Active Member",
        nov: "2,087",
        oct: "1,990",
        trend: "97",
        median: "1,272",
        percentile: 3,
      },
      {
        parameter: "Revenue per Active Member",
        nov: "$329,397",
        oct: "$328,739",
        trend: "+0.2%",
        median: "$373,063",
        percentile: 3,
      },
      {
        parameter: "Rev / SQM of Gym",
        nov: "$329,397",
        oct: "$328,739",
        trend: "+0.2%",
        median: "$373,063",
        percentile: 3,
      },
    ],
  },
  {
    title: "Cash Flow",
    rows: [
      {
        parameter: "Cash on Hand",
        nov: "$329,397",
        oct: "$328,739",
        trend: "+0.2%",
        median: "$373,063",
        percentile: 3,
      },
      {
        parameter: "Net Variable Cash Flow",
        nov: "58.45%",
        oct: "61.68%",
        trend: "-3.23%",
        median: "45.88%",
        percentile: 3,
      },
    ],
  },
  {
    title: "Growth",
    rows: [
      {
        parameter: "Revenue Growth",
        nov: "58.45%",
        oct: "61.68%",
        trend: "-3.23%",
        median: "45.88%",
        percentile: 3,
      },
      {
        parameter: "Gross Profit Growth",
        nov: "58.45%",
        oct: "61.68%",
        trend: "-3.23%",
        median: "45.88%",
        percentile: 3,
      },
      {
        parameter: "EBIT Growth",
        nov: "58.45%",
        oct: "61.68%",
        trend: "-3.23%",
        median: "45.88%",
        percentile: 3,
      },
    ],
  },
];

export const KPIResultTable = () => {
  return (
    <>
      <Table className="w-full">
        <TableHeader className="text-[#1D1D1D]">
          <TableRow className="border-b border-[#5F6073]">
            <CustomTableHead label="parameter" isFirstHeader={true} />
            <CustomTableHead label="nov 2021" extraLabel="result" />
            <CustomTableHead label=" oct 2021" />
            <CustomTableHead label="vs Oct 2021" extraLabel="trend" />
            <CustomTableHead label="median" />
            <CustomTableHead label="percentile" extraLabel="trend" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sections.map((section) => (
            <React.Fragment key={section.title}>
              <TableRow key={section.title}>
                <TableCell colSpan={1} className="pt-6 pb-2 text-left">
                  <span className="text-sm font-semibold text-[#1D1D1D]">
                    {section.title}
                  </span>
                </TableCell>
              </TableRow>
              {section.rows.map((row, idx) => (
                <TableRow
                  key={idx}
                  className="border-t border-b border-[#EAEAEA] p-5">
                  <TableCell className="text-sm font-light text-[#1D1D1D] whitespace-nowrap">
                    {row.parameter}
                  </TableCell>
                  <TableCell className="text-sm font-light text-center text-[#1D1D1D]">
                    {row.nov}
                  </TableCell>
                  <TableCell className="text-sm font-light text-center text-[#1D1D1D]">
                    {row.oct}
                  </TableCell>
                  <TableCell
                    className={`text-sm text-center font-light ${
                      row.trend.startsWith("-")
                        ? "text-[#FF4D4F]"
                        : "text-[#028A0F]"
                    }`}>
                    {row.trend}
                  </TableCell>
                  <TableCell className="text-sm text-center font-light text-[#1D1D1D]">
                    {row.median}
                  </TableCell>
                  <TableCell className="text-sm text-center">
                    <div className="flex justify-center gap-0.5 rounded-xs border border-[#BFBFBF] w-40 m-auto">
                      {[1, 2, 3, 4, 5].map((p) => (
                        <div
                          key={p}
                          className={`w-6 h-6 text-xs font-light flex items-center justify-center ${
                            row.percentile === p
                              ? "bg-[#BFBFBF] text-white font-bold"
                              : "text-[#1D1D1D]"
                          }`}>
                          {p}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <p className="text-[10px] text-[#1D1D1D] mt-2 ml-2">
        * For this metric, a result below target is favorable.
      </p>
    </>
  );
};
