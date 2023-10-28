import Login from '../Screens/Login.jsx';
import Registration from '../Screens/Registration.jsx';
import Home from '../Screens/Home.jsx';
import Map from '../Screens/Map.jsx';
import Comments from '../Screens/Comments.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from '../const/COLORS.jsx';
import { useAuth } from '../hooks/useAuth.js';

const MainStack = createStackNavigator();
const MainNaviganion = () => {
  const { isAuth } = useAuth();
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={isAuth ? 'Home' : 'Login'}
        backBehavior="firstRoute"
      >
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Map"
          component={Map}
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
          component={Comments}
          options={{
            title: 'Коментарі',
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray,
            },
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
