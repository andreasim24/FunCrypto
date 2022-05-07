import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";

export interface PortfolioCoinProps {
  portfolioCoin: {
    amount: number;
    coin: {
      id: string;
      image: string;
      name: string;
      symbol: string;
      currentPrice: number;
    };
  };
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
  const {
    portfolioCoin: {
      amount,
      coin: { id, image, name, symbol, currentPrice }
    }
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
        <Text style={styles.value}>${amount * currentPrice}</Text>
        <Text style={styles.symbol}>
          {symbol} {amount}
        </Text>
      </View>
    </Pressable>
  );
};

export default PortfolioCoin;
