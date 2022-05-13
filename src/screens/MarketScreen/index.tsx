import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import MarketCoin from "../../components/MarketCoin";
import SearchBar from "../../components/SearchBar";
import styles from "./styles";

import { API, graphqlOperation } from "aws-amplify";
import { listCoins } from "../../graphql/queries";

const image = require("../../../assets/images/market.png");

const MarketScreen = () => {
  const [coins, setCoins] = useState([]);
  const [filterCoin, setFilterCoin] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listCoins));
      setCoins(response.data.listCoins.items);
      setFilterCoin(response.data.listCoins.items);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const searchFilter = term => {
    if (term) {
      const newData = coins.filter(item => item.cgId.includes(term));
      console.log(newData);
      setFilterCoin(newData);
      setTerm(term);
    } else {
      setFilterCoin(coins);
      setTerm(term);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={filterCoin}
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
            <SearchBar term={term} onTermChange={term => searchFilter(term)} />
          </>
        )}
      />
    </View>
  );
};

export default MarketScreen;
