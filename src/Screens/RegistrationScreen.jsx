import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import COLORS from '../const/COLORS';
import Input from '../components/Input';
import Button from '../components/Button';

export default function RegistrationScreen() {
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
          <Input placeholder="Логін" />
          <Input placeholder="Адреса електроної пошти" />
          <Input placeholder="Пароль" password />
        </KeyboardAvoidingView>
        <Button title="Зареєструватися" />
        <TouchableOpacity style={styles.loginLink} onPress={() => {}}>
          <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: COLORS.screenBg,
    height: 550,
    marginTop: 300,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
  iconBox: {
    width: 120,
    height: 120,
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -60 }],
    backgroundColor: COLORS.inputBg,
    borderRadius: 16,
  },
  addImageBtn: {
    position: 'absolute',
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: COLORS.orange,
  },
  title: {
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
