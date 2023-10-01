import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from './PostsScreen.jsx';
import CreatePostsScreen from './CreatePostsScreen.jsx';
import ProfileScreen from './ProfileScreen.jsx';
import COLORS from '../const/COLORS.jsx';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

export default function Home() {
  const [posts, setPosts] = useState([]);
  const addPosts = post => {
    setPosts(prevState => [...prevState, post]);
  };

  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      backBehavior="history"
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
        component={PostsScreen}
        posts={posts}
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
              onPress={() => {
                navigation.goBack();
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
        component={CreatePostsScreen}
        addPosts={addPosts}
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
        component={ProfileScreen}
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
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
