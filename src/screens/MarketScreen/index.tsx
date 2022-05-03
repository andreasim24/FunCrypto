import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import MarketCoin from "../../components/MarketCoin";
import styles from "./styles";

const image = require("../../../assets/images/Saly-17.png");

const marketCoins = [
  {
    id: 1,
    name: "Virtual Dollars",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    valueChange24H: 62.2,
    valueUSD: 6420
  },
  {
    id: 2,
    name: "Bitcoin",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    valueChange24H: 1.5,
    valueUSD: 4572
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    valueChange24H: 2.5,
    valueUSD: 3577
  },
  {
    id: 4,
    name: "Virtual Dollars",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    valueChange24H: 62.2,
    valueUSD: 6420
  },
  {
    id: 5,
    name: "Bitcoin",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    valueChange24H: 1.5,
    valueUSD: 4572
  },
  {
    id: 6,
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    valueChange24H: 2.5,
    valueUSD: 3577
  },
  {
    id: 7,
    name: "Virtual Dollars",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    valueChange24H: 62.2,
    valueUSD: 6420
  },
  {
    id: 8,
    name: "Bitcoin",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    valueChange24H: -1.5,
    valueUSD: 4572
  },
  {
    id: 9,
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    valueChange24H: 2.5,
    valueUSD: 3577
  }
];

const MarketScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={marketCoins}
        renderItem={({ item }) => {
          return <MarketCoin marketCoin={item} key={item.id} />;
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.title}>Market</Text>
          </>
        )}
      />
    </View>
  );
};

export default MarketScreen;
