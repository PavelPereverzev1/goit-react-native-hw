import 'react-native-gesture-handler';
import './firebase.js';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/redux/store.js';
import MainNaviganion from './src/navigation/mainNavigation.jsx';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/roboto-v30-cyrillic_latin-regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/roboto-v30-cyrillic_latin-500.ttf'),
    'Roboto-Bold': require('./assets/fonts/roboto-v30-cyrillic_latin-700.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <MainNaviganion />
      </PersistGate>
      <StatusBar style="auto"></StatusBar>
    </Provider>
  );
}
