import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

const uploadImage = async (uri, fileName) => {
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
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        imageURL = downloadURL;
      });
    }
  );

  return imageURL;
};

export default uploadImage;
