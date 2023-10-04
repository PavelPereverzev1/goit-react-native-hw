import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Post from '../components/Post';

export default function PostsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Post />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    rowGap: 32,
  },
});
