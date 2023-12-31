import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from '../Screens/Posts.jsx';
import CreatePost from '../Screens/CreatePost.jsx';
import Profile from '../Screens/Profile.jsx';
import COLORS from '../const/COLORS.jsx';
import { Feather } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const BottomNavigation = ({ logOut, navigation }) => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      backBehavior="history"
      detachInactiveScreens="false"
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: COLORS.gray,
        },
        headerTitleAlign: 'center',
        headerTintColor: COLORS.textClr,
        headerTitleStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 17,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={Posts}
        options={{
          title: 'Публікації',
          headerRightContainerStyle: {
            paddingRight: 16,
          },
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color={COLORS.gray}
              onPress={logOut}
            />
          ),
          tabBarIcon: ({ focused, size }) => (
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: focused && COLORS.orange },
              ]}
            >
              <Feather
                name="grid"
                color={focused ? COLORS.white : COLORS.textClr}
                size={size}
              />
            </View>
          ),
          tabBarIconStyle: {
            marginLeft: 80,
          },
        }}
      />

      <Tabs.Screen
        name="CreatePosts"
        component={CreatePost}
        options={{
          title: 'Створити публікацію',
          tabBarStyle: { display: 'none' },
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color={COLORS.gray}
              onPress={() => {
                navigation.navigate('Posts');
              }}
            />
          ),
          tabBarIcon: ({ focused, size }) => (
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: focused && COLORS.orange },
              ]}
            >
              <Feather
                name="plus"
                color={focused ? COLORS.white : COLORS.textClr}
                size={size}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: focused && COLORS.orange },
              ]}
            >
              <Feather
                name="user"
                color={focused ? COLORS.white : COLORS.textClr}
                size={size}
              />
            </View>
          ),
          tabBarIconStyle: {
            marginRight: 80,
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  iconContainer: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
