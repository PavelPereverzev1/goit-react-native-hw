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
import styles from './LoginStyles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailBorderColor, setEmailBorderColor] = useState('#e8e8e8');
  const [passwordBorderColor, setPasswordBorderColor] = useState('#e8e8e8');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Увійти</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.wraper}
        >
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
        <TouchableOpacity style={styles.signinBtn} onPress={() => {}}>
          <Text style={styles.btnText}>Зареєструватися</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginLink} onPress={() => {}}>
          <Text style={styles.linkText}>Немає акаунту? Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
