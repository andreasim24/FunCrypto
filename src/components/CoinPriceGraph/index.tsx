import { View, Text, Dimensions } from "react-native";
import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

interface CoinPriceGraphProps {
  dataString: string;
}

const CoinPriceGraph = ({ dataString }: CoinPriceGraphProps) => {
  const data = JSON.parse(dataString);

  return (
    <View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data
            }
          ]
        }}
        width={Dimensions.get("window").width - 30} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(18, 85, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#000000"
          }
        }}
        withInnerLines={false}
        withOuterLines={false}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
};

export default CoinPriceGraph;
