import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, View, ImageBackground } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen.jsx';
import RegistrationScreen from './src/Screens/RegistrationScreen.jsx';
import Home from './src/Screens/Home.jsx';

const MainStack = createStackNavigator();

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
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto"></StatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
