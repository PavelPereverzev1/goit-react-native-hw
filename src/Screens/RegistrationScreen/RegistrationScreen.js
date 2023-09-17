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
import styles from './Styles';

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
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        ></KeyboardAvoidingView>
        <View style={styles.iconBox}>
          <TouchableOpacity style={styles.addImageBtn} onPress={() => {}}>
            <Image source={require('../../../assets/Union.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.header}>Реєстрація</Text>
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
        <TextInput
          style={[styles.input, { borderColor: passwordBorderColor }]}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          onFocus={() => setPasswordBorderColor('#FF6C00')}
          onBlur={() => setPasswordBorderColor('#e8e8e8')}
        />
        <TouchableOpacity
          style={styles.addImageBtn}
          onPress={() => {}}
        ></TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
