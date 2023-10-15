import { useState } from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import Post from '../components/Post';
import { useAuth } from '../hooks/useAuth';
import COLORS from '../const/COLORS';

export default function Posts() {
  const { name, email } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.userIcon}>
          <Image
            source={require('../../assets/UserIcon.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <ScrollView style={styles.listContainer}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  listContainer: {
    flex: 1,
    paddingVertical: 32,
    backgroundColor: COLORS.white,
  },
  userContainer: {
    width: '100%',
    paddingBottom: 10,
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
  },
  userIcon: {
    width: 60,
    height: 60,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
  },
  name: {
    color: COLORS.textClr,
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
  },
  email: {
    color: COLORS.textClrGray,
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
  },
});
