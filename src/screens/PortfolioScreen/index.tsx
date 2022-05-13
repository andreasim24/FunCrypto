import React, { useState, useContext, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import PortfolioCoin from "../../components/PortfolioCoin";
import styles from "./styles";

import { API, graphqlOperation } from "aws-amplify";
import { getUserPortfolio } from "./queries";
import AppContext from "../../utils/AppContext";
import formatMoney from "../../utils/formatMoney";

const image = require("../../../assets/images/portfolio.png");

const PortfolioScreen = () => {
  const [balance, setBalance] = useState(0);
  const [portfolioCoins, setPortfolioCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const { userId } = useContext(AppContext);

  const fetchPortfolio = async () => {
    setLoading(true);
    try {
      const response = await API.graphql(
        graphqlOperation(getUserPortfolio, { id: userId })
      );
      setBalance(response.data.getUser.networth);
      setPortfolioCoins(response.data.getUser.portfolioCoins.items);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={portfolioCoins}
        renderItem={({ item }) => {
          return <PortfolioCoin portfolioCoin={item} />;
        }}
        onRefresh={fetchPortfolio}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Portfolio Balance</Text>
              <Text style={styles.balance}>${formatMoney(balance)}</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
