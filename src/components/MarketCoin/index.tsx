import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

export interface MarketCoinProps {
  marketCoin: {
    image: string;
    name: string;
    symbol: string;
    valueChange24H: number;
    valueUSD: number;
  };
}

const MarketCoin = (props: MarketCoinProps) => {
  const {
    marketCoin: { image, name, symbol, valueChange24H, valueUSD }
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.value}>${valueUSD}</Text>
        <Text style={{ color: valueChange24H > 0 ? "green" : "red" }}>
          {valueChange24H > 0 && "+"} {valueChange24H}
        </Text>
      </View>
    </View>
  );
};

export default MarketCoin;
