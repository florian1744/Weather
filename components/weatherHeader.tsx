import { View, Text } from "react-native";
import { WeatherHeaderProps } from "@/types";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const WeatherHeader = ({
  isTrackedView,
  currentLocation,
}: WeatherHeaderProps) => {
  return (
    <View>
      {isTrackedView ? (
        <Text className="text-sm">
          Your Location{" "}
          <FontAwesome5
            name="location-arrow"
            size={12}
            color="black"
          />
        </Text>
      ) : (
        <></>
      )}

      {currentLocation ? (
        <Text className="text-xl">
          {currentLocation.city}, {currentLocation.isoCountryCode}
        </Text>
      ) : (
        <Text className="text-xl text-red-400">unknown Location</Text>
      )}
      <Text className="text-xl">999°</Text>
      <Text className="">cloudy</Text>
      <Text className="text-base">H: 999° T: -42°</Text>
    </View>
  );
};

export default WeatherHeader;
