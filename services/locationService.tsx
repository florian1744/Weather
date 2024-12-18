import { UserLocationModel } from "@/types";
import * as Location from "expo-location";

export const checkLocationPermission = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status == "granted") {
    return true;
  }
  return false;
};

export const getUsersCurrentCoords = async () => {
  const { coords } = await Location.getCurrentPositionAsync();
  if (coords) {
    const { latitude, longitude } = coords;
    const usersCurrentCoords = latitude + ";" + longitude;
    return usersCurrentCoords;
  }
  return null;
};

export const getCurrentLocation = async () => {
  //get current position lat and long
  const { coords } = await Location.getCurrentPositionAsync();
  console.log(coords);

  if (coords) {
    const { latitude, longitude } = coords;
    console.log(latitude, longitude);

    //provide lat and long to get the the actual address
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    console.log(response);

    for (let item of response) {
      const userLocation: UserLocationModel = {
        city: item.city || "unknown city",
        country: item.country || "unknown city",
        isoCountryCode: item.isoCountryCode || "unknown country code",
      };
      return userLocation;
    }
  }
  return null;
};
