import { useState } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './RegistrationStyles';

export default function RegistrationScreen() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginBorderColor, setLoginBorderColor] = useState('#e8e8e8');
  const [emailBorderColor, setEmailBorderColor] = useState('#e8e8e8');
  const [passwordBorderColor, setPasswordBorderColor] = useState('#e8e8e8');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.iconBox}>
          <TouchableOpacity style={styles.addImageBtn} onPress={() => {}}>
            <Image source={require('../../../assets/Union.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Реєстрація</Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.wraper}
        >
          <TextInput
            style={[styles.input, { borderColor: loginBorderColor }]}
            placeholder="Логін"
            value={login}
            onChangeText={setLogin}
            onFocus={() => setLoginBorderColor('#FF6C00')}
            onBlur={() => setLoginBorderColor('#e8e8e8')}
          />
          <TextInput
            style={[styles.input, { borderColor: emailBorderColor }]}
            placeholder="Адреса електроної пошти"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setEmailBorderColor('#FF6C00')}
            onBlur={() => setEmailBorderColor('#e8e8e8')}
          />
          <View style={styles.wraper}>
            <TextInput
              style={[styles.input, { borderColor: passwordBorderColor }]}
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPasswordBorderColor('#FF6C00')}
              onBlur={() => setPasswordBorderColor('#e8e8e8')}
            />
            <TouchableOpacity style={styles.showPassword} onPress={() => {}}>
              <Text style={styles.linkText}>Показати</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.signupBtn} onPress={() => {}}>
          <Text style={styles.btnText}>Зареєструватися</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginLink} onPress={() => {}}>
          <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
