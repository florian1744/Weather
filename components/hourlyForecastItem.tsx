import { Text, View } from "react-native";
import React, { Component } from "react";

export class HourlyForecastItem extends Component {
  render() {
    return (
      <View>
        <Text>21 Uhr</Text>
        <Text>-99°</Text>
      </View>
    );
  }
}

export default HourlyForecastItem;
