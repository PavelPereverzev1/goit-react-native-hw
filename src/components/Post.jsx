import { StyleSheet, Text, View, Image } from 'react-native';
import COLORS from '../const/COLORS';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

//{ uri, name, place, location }

const Post = ({ id, uri, place, location, name, comments }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      </View>
      <Text style={styles.textName}>{name}</Text>
      <View style={styles.info}>
        <View style={{ flexDirection: 'row' }}>
          <Feather
            name="message-circle"
            style={{ marginRight: 6 }}
            size={24}
            color={COLORS.gray}
            onPress={() => {
              navigation.navigate('Comments', { id, uri });
            }}
          />
          <Text style={styles.counter}> 0</Text>
        </View>
        <View style={{ flexDirection: 'row', maxWidth: '80%' }}>
          <Feather
            name="map-pin"
            style={{ marginRight: 4 }}
            size={24}
            color={COLORS.gray}
            onPress={() => {
              navigation.navigate('Map', { location });
            }}
          />
          <Text style={styles.place}>{place}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    marginBottom: 32,
  },
  imageBox: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  textName: {
    color: COLORS.textClr,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    marginBottom: 8,
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counter: {
    color: COLORS.gray,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  place: {
    color: COLORS.textClr,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
