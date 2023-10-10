// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
// import { getAuth } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Функція для підключення бази даних у проект
import { getFirestore } from 'firebase/firestore';
// Функція для підключення сховища файлів в проект
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBOZNhL8SYQDdHZX3Ovhg6oCVEPNXb031M',
  authDomain: 'react-native-hw-211f0.firebaseapp.com',
  projectId: 'react-native-hw-211f0',
  storageBucket: 'react-native-hw-211f0.appspot.com',
  messagingSenderId: '122462089732',
  appId: '1:122462089732:web:690019ad7a77ab130e3b51',
};

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
