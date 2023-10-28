import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import COLORS from '../const/COLORS';

export default Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.orange} />
      <Text style={styles.text}>Завантаження ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  text: {
    color: COLORS.textClr,
    fontFamily: 'Roboto-Medium',
    marginTop: 10,
    fontSize: 16,
  },
});
