import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffffff',
    height: '66%',
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
    backgroundColor: '#F6F6F6',
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
    borderColor: '#FF6C00',
  },
  header: {
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
});

export default styles;
