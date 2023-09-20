import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, View, ImageBackground } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen.jsx';
import RegistrationScreen from './src/Screens/RegistrationScreen.jsx';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/roboto-v30-cyrillic_latin-regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/roboto-v30-cyrillic_latin-500.ttf'),
    'Roboto-Bold': require('./assets/fonts/roboto-v30-cyrillic_latin-700.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <ImageBackground
        source={require('./assets/PhotoBG.png')}
        style={styles.image}
        resizeMode="cover"
      >
        {/* <LoginScreen></LoginScreen> */}
        <RegistrationScreen></RegistrationScreen>
      </ImageBackground>
      <StatusBar style="auto"></StatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
