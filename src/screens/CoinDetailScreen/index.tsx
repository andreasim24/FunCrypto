import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import PercentageChange from "../../components/PercentageChange";

const CoinDetailScreen = () => {
  const [coinData, setCoinData] = useState({
    id: "1",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    name: "Bitcoin",
    symbol: "BTC",
    valueChange24H: -1.12,
    valueChange1D: 1.22,
    valueChange7D: -2.4,
    currentPrice: 41234,
    amount: 2
  });

  const onBuy = () => {
    console.warn("buying");
  };
  const onSell = () => {
    console.warn("selling");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Image style={styles.image} source={{ uri: coinData.image }} />
          <View>
            <Text style={styles.name}>{coinData.name}</Text>
            <Text style={styles.symbol}>{coinData.symbol}</Text>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <AntDesign name={"staro"} size={30} colors={"#2f95dc"} />
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Current Price</Text>
          <Text style={styles.value}>{coinData.currentPrice}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: 180,
            justifyContent: "space-between"
          }}
        >
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 Hour</Text>
            <PercentageChange value={coinData.valueChange24H} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 Day</Text>
            <PercentageChange value={coinData.valueChange1D} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>7 days</Text>
            <PercentageChange value={coinData.valueChange7D} />
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <Text>Position</Text>
        <Text>
          {coinData.symbol} {coinData.amount} ($ {""}
          {coinData.currentPrice * coinData.amount})
        </Text>
      </View>

      <View style={[styles.row, { marginTop: "auto" }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "green" }]}
          onPress={onBuy}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={onSell}
        >
          <Text style={styles.buttonText}>Sell</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CoinDetailScreen;
