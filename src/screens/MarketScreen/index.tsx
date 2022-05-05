import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import MarketCoin from "../../components/MarketCoin";
import styles from "./styles";

import { API, graphqlOperation } from "aws-amplify";
import { listCoins } from "../../graphql/queries";

const image = require("../../../assets/images/market.png");

const MarketScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listCoins));
      setCoins(response.data.listCoins.items);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={coins}
        onRefresh={fetchCoins}
        refreshing={loading}
        renderItem={({ item }) => {
          return <MarketCoin marketCoin={item} />;
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
