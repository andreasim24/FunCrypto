import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import PortfolioCoin from "../../components/PortfolioCoin";
import styles from "./styles";

const image = require("../../../assets/images/portfolio.png");

const portfolioCoins = [
  {
    id: 1,
    name: "Virtual Dollars",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    amount: 62.2,
    valueUSD: 6420
  },
  {
    id: 2,
    name: "Bitcoin",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    amount: 1.5,
    valueUSD: 4572
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    amount: 2.5,
    valueUSD: 3577
  },
  {
    id: 4,
    name: "Virtual Dollars",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    amount: 62.2,
    valueUSD: 6420
  },
  {
    id: 5,
    name: "Bitcoin",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    amount: 1.5,
    valueUSD: 4572
  },
  {
    id: 6,
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    amount: 2.5,
    valueUSD: 3577
  },
  {
    id: 7,
    name: "Virtual Dollars",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    amount: 62.2,
    valueUSD: 6420
  },
  {
    id: 8,
    name: "Bitcoin",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    amount: 1.5,
    valueUSD: 4572
  },
  {
    id: 9,
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    symbol: "USD",
    amount: 2.5,
    valueUSD: 3577
  }
];

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={portfolioCoins}
        renderItem={({ item }) => {
          return <PortfolioCoin portfolioCoin={item} key={item.id} />;
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Portfolio Balance</Text>
              <Text style={styles.balance}>$62.000</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
