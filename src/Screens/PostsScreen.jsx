import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Post from '../components/Post';

export default function PostsScreen({ posts }) {
  return (
    <ScrollView>
      <Text>PostsScreen</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
