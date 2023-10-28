import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../const/COLORS';
const Button = ({ title, onPress = () => {}, isDisabled }) => {
  return (
    <TouchableOpacity
      style={[
        styles.Btn,
        { backgroundColor: isDisabled ? COLORS.disabledBtn : COLORS.orange },
      ]}
      onPress={onPress}
      {...{ disabled: isDisabled }}
    >
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
    borderRadius: 25,
  },

  btnText: {
    color: COLORS.white,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
