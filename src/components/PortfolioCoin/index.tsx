import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";

export interface PortfolioCoinProps {
  portfolioCoin: {
    image: string;
    name: string;
    symbol: string;
    amount: number;
    valueUSD: number;
  };
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
  const {
    portfolioCoin: { image, name, symbol, amount, valueUSD }
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
        <Text style={styles.symbol}>
          {symbol} {amount}
        </Text>
      </View>
    </Pressable>
  );
};

export default PortfolioCoin;
