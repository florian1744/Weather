import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import {
  checkLocationPermission,
  getCurrentLocation,
  getUsersCurrentCoords,
} from "@/services/locationService";
import { UserLocationModel } from "@/types";
import WeatherHeader from "@/components/weatherHeader";

export default function Index() {
  const [userLocation, setUserLocation] = useState<UserLocationModel | null>(
    null
  );

  useEffect(() => {
    const fetchLocation = async () => {
      await checkLocationPermission();
      getUsersCurrentCoords();
      /*
      const location = await getCurrentLocation();
      setUserLocation(location);
      */
    };
    fetchLocation();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-400">test</Text>
      <WeatherHeader
        isTrackedView={true}
        currentLocation={userLocation}
      />
    </View>
  );
}
