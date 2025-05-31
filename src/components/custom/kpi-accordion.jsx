"use client";
import React, { useEffect, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, CircleX, CircleCheck } from "lucide-react";
import { KPIProgressbar } from "./kpi-progressbar";
import { ChartLoader } from "./chart-loader";
import { KPIAccordionStats } from "./kpi-accordion-stats";

export const KPIAccordion = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/kpi-appendix`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || !data.length) {
    return <ChartLoader />;
  }
  return (
    <Accordion.Root
      defaultValue={data[0]?.id}
      type="single"
      collapsible
      className="w-full">
      {data.map((item) => {
        return (
          <Accordion.Item key={item.id} value={item.id} className="border-b">
            <Accordion.Header>
              <Accordion.Trigger className="group cursor-pointer flex w-full items-center justify-between p-4 transition-all">
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
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="p-4 text-muted-foreground rounded-sm border border-dime-outline-grey">
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
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
};
