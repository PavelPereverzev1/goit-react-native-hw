import * as Location from 'expo-location';

const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access location was denied');
  }
  let location = await Location.getCurrentPositionAsync({});

  const crd = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
  return crd;
};

export default getLocation;
