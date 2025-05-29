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

export const Container = ({
  title,
  isBottomBorderVisible = false,
  children,
}) => {
  return (
    <Card className="w-3/4 mx-auto mt-6 mb-6 rounded-md">
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
                  <SelectItem value="current-to-previous-week">
                    Current Week to Previous Week
                  </SelectItem>
                  <SelectItem value="current-to-previous-two-week">
                    Current Week to Previous Two Weeks
                  </SelectItem>
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
