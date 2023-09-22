import {
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';
import COLORS from '../const/COLORS';
import Input from '../components/Input';
import Button from '../components/Button';

export default function LoginScreen() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (text, inputName) => {
    setInputs(prevState => ({ ...prevState, [inputName]: text }));
  };

  const showData = () => {
    Keyboard.dismiss();
    setInputs({
      email: '',
      password: '',
    });
    console.log(inputs);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Увійти</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.wraper}
        >
          <Input
            placeholder="Адреса електроної пошти"
            value={inputs.email}
            onChangeText={text => {
              handleOnChange(text, 'email');
            }}
          />
          <Input
            placeholder="Пароль"
            password
            value={inputs.password}
            onChangeText={text => {
              handleOnChange(text, 'password');
            }}
          />
        </KeyboardAvoidingView>
        <Button title="Увійти" onPress={showData} />
        <TouchableOpacity style={styles.loginLink} onPress={() => {}}>
          <Text style={styles.linkText}>Немає акаунту? Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: COLORS.screenBg,
    height: 490,
    paddingTop: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    color: COLORS.textClr,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    marginBottom: 33,
  },

  loginLink: {
    width: '100%',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: COLORS.linkTextClr,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
