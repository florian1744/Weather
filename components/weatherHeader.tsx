import { View, Text } from "react-native";
import { WeatherHeaderProps } from "@/types";

const WeatherHeader = ({
  isTrackedView,
  currentLocation,
}: WeatherHeaderProps) => {
  return (
    <View>
      {isTrackedView ? (
        <Text className="text-sm">Your Location (icon)</Text>
      ) : (
        <></>
      )}

      {currentLocation ? (
        <Text className="text-xl">{currentLocation.city}</Text>
      ) : (
        <Text className="text-xl">unknown Location</Text>
      )}
      <Text className="text-2xl">999°</Text>
      <Text className="">cloudy</Text>
      <Text className="text-base">H: 999° T: -42°</Text>
    </View>
  );
};

export default WeatherHeader;
