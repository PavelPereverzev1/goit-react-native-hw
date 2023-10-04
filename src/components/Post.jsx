import { StyleSheet, Text, View, Image } from 'react-native';
import COLORS from '../const/COLORS';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

//{ uri, name, place, location }

const Post = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={require('../../assets/forest.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.textName}>Ліс</Text>
      <View style={styles.info}>
        <View style={{ flexDirection: 'row' }}>
          <Feather
            name="message-circle"
            style={{ marginRight: 6 }}
            size={24}
            color={COLORS.gray}
            onPress={() => {
              navigation.navigate('Comments');
            }}
          />
          <Text style={styles.counter}>0</Text>
        </View>
        <View style={{ flexDirection: 'row', maxWidth: '80%' }}>
          <Feather
            name="map-pin"
            style={{ marginRight: 4 }}
            size={24}
            color={COLORS.gray}
            onPress={() => {
              navigation.navigate('Map');
            }}
          />
          <Text style={styles.place}>Ivano-Frankivs'k Region, Ukraine</Text>
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
