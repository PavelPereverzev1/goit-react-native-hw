import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffffff',
    height: 490,
    paddingTop: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    marginBottom: 33,
  },
  input: {
    height: 50,
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  wraper: {
    width: '100%',
    position: 'relative',
  },
  showPassword: {
    position: 'absolute',
    justifyContent: 'center',
    height: 50,
    top: 0,
    right: 15,
  },
  signinBtn: {
    height: 50,
    width: '100%',
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    borderRadius: 25,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  loginLink: {
    width: '100%',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});

export default styles;
