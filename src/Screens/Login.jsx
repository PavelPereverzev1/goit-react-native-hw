import {
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../const/COLORS';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const { email, password } = inputs;
    setIsDisabled(!(email && password));
  }, [inputs]);

  const handleOnChange = (text, inputName) => {
    setInputs(prevState => ({ ...prevState, [inputName]: text }));
  };

  const handleLogin = async ({ email, password }) => {
    Keyboard.dismiss();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          id: user.uid,
          token: user.token,
        })
      );
      setInputs({
        login: '',
        email: '',
        password: '',
      });
      navigation.navigate('Home');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      Alert.alert('НЕ ВІРНІ АБО НЕ ПОВНІ ДАНІ');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/PhotoBG.png')}
      style={styles.image}
      resizeMode="cover"
    >
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
          <Button
            title="Увійти"
            isDisabled={isDisabled}
            onPress={() => {
              handleLogin(inputs);
            }}
          />
          <View style={styles.loginLink}>
            <Text style={styles.linkText}>Немає акаунту?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Registration');
              }}
            >
              <Text
                style={[styles.linkText, { textDecorationLine: 'underline' }]}
              >
                Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
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
    flexDirection: 'row',
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
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
