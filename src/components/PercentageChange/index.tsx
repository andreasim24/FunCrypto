import React from "react";
import { Text } from "react-native";

interface PercentageChangeProps {
  value: number;
  style?: object;
}

const PercentageChange = ({ value, style = {} }: PercentageChangeProps) => {
  return (
    <Text style={{ ...style, color: value > 0 ? "green" : "red" }}>
      {value > 0 ? "+" : ""}
      {value.toPrecision(2)}%
    </Text>
  );
};

export default PercentageChange;
