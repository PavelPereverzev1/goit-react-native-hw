import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/slices/userSlice';
import BottomNavigation from '../navigation/bottomNavigation.jsx';
import { getPosts } from '../redux/operation';

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
