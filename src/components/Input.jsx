import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import COLORS from '../const/COLORS';

const Input = ({ onFocus = () => {}, password, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View
      style={[
        styles.inputWraper,
        { borderColor: isFocused ? COLORS.orange : COLORS.inputBoder },
      ]}
    >
      <TextInput
        secureTextEntry={hidePassword}
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        style={{ flex: 1, fontFamily: 'Roboto-Regular', fontSize: 16 }}
        {...props}
      />
      {password && (
        <TouchableOpacity
          style={styles.showPassword}
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Text style={styles.linkText}>
            {hidePassword ? 'Показати' : 'Приховати'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputWraper: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1,
    borderRadius: 8,
  },
  showPassword: {
    justifyContent: 'center',
    height: 50,
  },
  linkText: {
    color: COLORS.linkTextClr,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
