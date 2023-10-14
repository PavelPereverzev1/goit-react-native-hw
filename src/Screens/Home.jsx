import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/slices/userSlice';
import BottomNavigation from '../navigation/bottomNavigation';

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigation.navigate('Login');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return <BottomNavigation logOut={logOut} navigation={navigation} />;
}
