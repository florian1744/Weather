import { useEffect, useState } from "react";
import { View } from "react-native";
import {
  checkLocationPermission,
  getCurrentLocation,
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
      const location = await getCurrentLocation();
      setUserLocation(location);
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
      <WeatherHeader
        isTrackedView={true}
        currentLocation={userLocation}
      />
    </View>
  );
}
