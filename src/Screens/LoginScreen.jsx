import {
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import COLORS from '../const/COLORS';
import Input from '../components/Input';
import Button from '../components/Button';

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Увійти</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.wraper}
        >
          <Input placeholder="Адреса електроної пошти" />
          <Input placeholder="Пароль" password />
        </KeyboardAvoidingView>
        <Button title="Увійти" />
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
