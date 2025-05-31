import React from "react";
import { Text } from "recharts";

export const CustomYAxisTick = ({
  x,
  y,
  payload,
  shortFormatCurrency = false,
}) => {
  return (
    <Text
      x={x + 10}
      y={y - 10}
      textAnchor="start"
      fontSize={12}
      fontWeight={600}
      fill="var(--color-dime-form-grey)">
      {shortFormatCurrency
        ? `$${payload.value / 1000}K`
        : `$${payload.value.toLocaleString()}`}
    </Text>
  );
};
