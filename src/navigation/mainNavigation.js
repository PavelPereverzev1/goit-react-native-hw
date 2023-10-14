// import {
//   Home,
//   RegistrationScreen,
//   LoginScreen,
//   MapScreen,
//   CommentsScreen,
// } from '../Screens/index.js';
import LoginScreen from '../Screens/LoginScreen.jsx';
import RegistrationScreen from '../Screens/RegistrationScreen.jsx';
import Home from '../Screens/Home.jsx';
import MapScreen from '../Screens/MapScreen.jsx';
import CommentsScreen from '../Screens/CommentsScreen.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import COLORS from '../const/COLORS.jsx';
import { useAuth } from '../hooks/useAuth';

const MainStack = createStackNavigator();
const MainNaviganion = () => {
  const { isAuth } = useAuth();

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={isAuth ? 'Home' : 'Login'}>
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
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{
            title: 'Мапа',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              textAlign: 'center',
              fontSize: 17,
              fontFamily: 'Roboto-Medium',
              color: COLORS.textClr,
            },
          }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            title: 'Коментарі',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              textAlign: 'center',
              fontSize: 17,
              fontFamily: 'Roboto-Medium',
              color: COLORS.textClr,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNaviganion;
