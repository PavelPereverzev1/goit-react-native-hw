import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const Post = ({ uri, name, place, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <ImageBackground
          // source={require(uri)}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
  },
  imageBox: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
});
