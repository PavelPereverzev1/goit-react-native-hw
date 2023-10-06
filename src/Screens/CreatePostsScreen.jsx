import { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import COLORS from '../const/COLORS';
import Button from '../components/Button';

export default function CreatePostsScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  const [post, setPost] = useState({
    id: '',
    uri: '',
    name: '',
    place: '',
    location: {},
  });

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const makePhoto = async () => {
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync();
      await MediaLibrary.createAssetAsync(data.uri);
      setPost(prevState => ({ ...prevState, uri: data.uri }));
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    await setPost(prevState => ({ ...prevState, location: coords }));
  };

  const handleOnChange = (text, inputName) => {
    setPost(prevState => ({ ...prevState, [inputName]: text }));
  };

  const createPost = () => {
    const newId = uuid.v4();
    setPost(prevState => ({ ...prevState, id: newId }));
    getLocation();
    // запис поста в store
    navigation.navigate('Posts');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <View style={styles.contentBox}>
          <Camera style={styles.camera} type={type} ref={cameraRef}>
            <TouchableOpacity style={styles.makePhotoBtn} onPress={makePhoto}>
              <Feather name="camera" size={24} color="black" />
            </TouchableOpacity>
          </Camera>
        </View>
        <Text style={styles.lableText}>Завантажте фото</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Назва..."
              value={post.name}
              style={styles.input}
              onChangeText={text => {
                handleOnChange(text, 'name');
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Feather
              name="map-pin"
              style={{ marginRight: 4 }}
              size={24}
              color={COLORS.gray}
            />
            <TextInput
              placeholder="Місцевість..."
              value={post.place}
              style={styles.input}
              onChangeText={text => {
                handleOnChange(text, 'place');
              }}
            />
          </View>
        </KeyboardAvoidingView>
        <Button title={'Опублікувати'} onPress={createPost} />
        <TouchableOpacity style={styles.trash} onPress={() => {}}>
          <Feather
            name="trash-2"
            size={24}
            color={COLORS.gray}
            onPress={() => {}}
          />
        </TouchableOpacity>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  contentBox: {
    width: '100%',
    height: 240,
    overflow: 'hidden',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: COLORS.inputBg,
  },
  makePhotoBtn: {
    width: 60,
    height: 60,
    opacity: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255, 0.3)',
  },
  camera: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lableText: {
    color: COLORS.gray,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginBottom: 32,
  },
  input: {
    color: COLORS.linkTextClr,
    fontFamily: 'Roboto-Regular',
    flexGrow: 1,
    fontSize: 16,
    height: 50,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  trash: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    flexShrink: 0,
    borderRadius: 20,
    backgroundColor: COLORS.inputBg,
    alignSelf: 'center',
  },
});
