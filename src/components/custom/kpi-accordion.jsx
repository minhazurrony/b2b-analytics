"use client";
import React from "react";
import { ChevronDown, CircleX, CircleCheck } from "lucide-react";
import { KPIProgressbar } from "./kpi-progressbar";
import { ChartLoader } from "./chart-loader";
import { KPIAccordionStats } from "./kpi-accordion-stats";
import { useApi } from "@/hooks/use-api";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const KPIAccordion = () => {
  const { data, isLoading } = useApi("/kpi-appendix");

  if (isLoading || !data.length) {
    return <ChartLoader />;
  }

  return (
    <Accordion
      type="single"
      collapsible={true}
      className="w-full"
      defaultValue={data[0]?.id}>
      {data.map((item) => {
        return (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="group cursor-pointer flex items-center justify-between p-4 hover:no-underline [&>svg]:hidden">
              <div className="flex items-center gap-2">
                <span className="font-normal text-xl text-dime-title-purple">
                  {`${item.title}: $${item.amount.toLocaleString()}`}
                </span>
                {item.status === "fail" ? (
                  <CircleX className="text-dime-error-red h-5 w-5" />
                ) : (
                  <CircleCheck className="h-5 w-5 text-dime-good-green" />
                )}
              </div>

              {/* Right side: icon + text */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {/* Icon with group-based rotation */}
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />

                {/* Expand / Collapse text */}
                <span className="hidden group-data-[state=closed]:inline uppercase text-xs font-semibold text-dime-light-purple">
                  Expand
                </span>
                <span className="hidden group-data-[state=open]:inline uppercase text-xs font-semibold text-dime-light-purple">
                  Collapse
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 text-muted-foreground rounded-sm border border-dime-outline-grey">
              <p className="font-light leading-[175%] tracking-[1.25%] text-dime-dark-grey mb-6">
                {item.description}
              </p>
              <p className="font-light text-sm text-dime-body-grey mb-6">
                {item.formula}
              </p>

              <div className="flex justify-between items-center">
                <div className="w-[30%] flex justify-between items-center">
                  <KPIAccordionStats stats={item} />
                </div>
                <div className="w-[50%]">
                  <KPIProgressbar value={item.progress} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
