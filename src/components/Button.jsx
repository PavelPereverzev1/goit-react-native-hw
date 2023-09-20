import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../const/COLORS';
const Button = ({ title }) => {
  return (
    <TouchableOpacity style={styles.Btn} onPress={() => {}}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Btn: {
    height: 50,
    width: '100%',
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.orange,
    borderRadius: 25,
  },
  btnText: {
    color: COLORS.screenBg,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
