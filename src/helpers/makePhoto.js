import * as MediaLibrary from 'expo-media-library';

const makePhoto = async cameraRef => {
  try {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await MediaLibrary.createAssetAsync(data.uri);
      return data.uri;
    }
  } catch (error) {
    console.log(error);
  }
};

export default makePhoto;
