import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";
import PercentageChange from "../PercentageChange";

export interface MarketCoinProps {
  marketCoin: {
    id: string;
    image: string;
    name: string;
    symbol: string;
    valueChange24H: number;
    currentPrice: number;
  };
}

const MarketCoin = (props: MarketCoinProps) => {
  const {
    marketCoin: { id, image, name, symbol, valueChange24H, currentPrice }
  } = props;

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("CoinDetails", { id })}
    >
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.value}>${currentPrice}</Text>
        <PercentageChange value={valueChange24H} />
      </View>
    </Pressable>
  );
};

export default MarketCoin;
