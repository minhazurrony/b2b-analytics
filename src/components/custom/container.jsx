import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const dropdownOptions = [
  {
    label: "Current Week to Previous Week",
    value: "current-to-previous-week",
  },
  {
    label: "Current Week to Previous Two Weeks",
    value: "current-to-previous-two-weeks",
  },
];

export const Container = ({
  title,
  isBottomBorderVisible = true,
  children,
}) => {
  return (
    <Card className="w-full  mt-6 mb-6 rounded-md">
      <CardHeader
        className={`${
          !isBottomBorderVisible && "flex justify-center items-center"
        }`}>
        <CardTitle
          className={`${
            isBottomBorderVisible && "border-b border-dime-faint-pink"
          } py-4  text-2xl font-normal text-dime-title-purple`}>
          {title}
        </CardTitle>
        {!isBottomBorderVisible && (
          <>
            <Separator className="flex-1/2 mx-2" />
            <Select>
              <SelectTrigger className="w-[320px]">
                <SelectValue placeholder="Current Week to Previous Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Ranges</SelectLabel>
                  {dropdownOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
