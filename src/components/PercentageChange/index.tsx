import { View, Text } from "react-native";
import React from "react";

interface PercentageChangeProps {
  value: number;
  style?: object;
}

const PercentageChange = ({ value, style = {} }: PercentageChangeProps) => {
  return (
    <Text style={{ ...style, color: value > 0 ? "green" : "red" }}>
      {value > 0 && "+"} {value} %
    </Text>
  );
};

export default PercentageChange;
