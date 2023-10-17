import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import COLORS from '../const/COLORS';
import Button from '../components/Button';
import makePhoto from '../helpers/makePhoto';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import getFileNameFromUri from '../helpers/getFileNameFromUri';
import getLocation from '../helpers/getLocation';
import { addPost } from '../redux/slices/operation';

export default function CreatePost() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  const isFocused = useIsFocused();
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [uri, setUri] = useState('');
  const dispatch = useDispatch();

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

  const handlePhoto = async () => {
    const uri = await makePhoto(cameraRef);
    setUri(uri);
  };

  const createPost = async () => {
    const fileName = getFileNameFromUri(uri);
    const response = await fetch(uri);
    const blob = await response.blob();
    const metadata = {
      contentType: 'image/jpeg',
    };

    const storageRef = ref(storage, 'images/' + fileName);
    const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

    uploadTask.on(
      'state_changed',
      () => {},
      error => {
        console.log(error.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
          const location = await getLocation();
          dispatch(addPost({ name, place, uri: downloadURL, location }));
        });
      }
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <View style={styles.contentBox}>
          {isFocused && (
            <Camera style={styles.camera} type={type} ref={cameraRef}>
              <TouchableOpacity
                style={styles.makePhotoBtn}
                onPress={handlePhoto}
              >
                <Feather name="camera" size={24} color="black" />
              </TouchableOpacity>
            </Camera>
          )}
        </View>
        <Text style={styles.lableText}>Завантажте фото</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Назва..."
              value={name}
              style={styles.input}
              onChangeText={text => {
                setName(text);
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
              value={place}
              style={styles.input}
              onChangeText={text => {
                setPlace(text);
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
