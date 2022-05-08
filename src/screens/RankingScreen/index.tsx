import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import UserRankingItem from "../../components/UserRankingItem";
import styles from "./styles";

import { API, graphqlOperation } from "aws-amplify";
import { getUsersByNetworth } from "./queries";

const image = require("../../../assets/images/rankings.png");

const RankingScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await API.graphql(
        graphqlOperation(getUsersByNetworth, { limit: 100 })
      );
      setUsers(response.data.getUsersByNetworth.items);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item, index }) => {
          return <UserRankingItem user={item} place={index + 1} />;
        }}
        onRefresh={fetchUsers}
        refreshing={loading}
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
