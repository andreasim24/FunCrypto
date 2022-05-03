import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";
import PercentageChange from "../PercentageChange";

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

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("CoinDetails")}
    >
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.value}>${valueUSD}</Text>
        <PercentageChange value={valueChange24H} />
      </View>
    </Pressable>
  );
};

export default MarketCoin;
