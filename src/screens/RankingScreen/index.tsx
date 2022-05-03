import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import UserRankingItem from "../../components/UserRankingItem";
import styles from "./styles";

const image = require("../../../assets/images/rankings.png");

const marketCoins = [
  {
    id: 1,
    name: "Virtual Dollars",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    netWorth: 6420
  },
  {
    id: 2,
    name: "Bitcoin",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    netWorth: 4572
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    netWorth: 3577
  }
];

const RankingScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={marketCoins}
        renderItem={({ item, index }) => {
          return (
            <UserRankingItem user={item} key={item.id} place={index + 1} />
          );
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.title}>Rankings</Text>
          </>
        )}
      />
    </View>
  );
};

export default RankingScreen;
