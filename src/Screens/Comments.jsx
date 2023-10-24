import { useState } from 'react';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/operation';
import { useAuth } from '../hooks/useAuth';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import COLORS from '../const/COLORS';
import { Feather } from '@expo/vector-icons';

export default function Comments({ route }) {
  const { uri, id } = route.params;
  const { name } = useAuth();
  const [comentText, setCommentText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newComment = {
      name,
      comentText,
      timeStamp: moment().format('DD-MMMM-YYYY|hh:mm'),
    };
    dispatch(addComment({ id, newComment }));
    setCommentText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      </View>

      <FlatList />

      <View style={styles.inputWraper}>
        <TextInput
          style={{ flex: 1, fontFamily: 'Roboto-Regular', fontSize: 16 }}
          placeholder="Коментувати ..."
          autoCorrect={false}
          onChangeText={text => {
            setCommentText(text);
          }}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSubmit}>
          <Feather name="arrow-up" size={18} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  imageBox: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  image: {
    flex: 1,
  },
  inputWraper: {
    height: 50,
    width: '100%',
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: COLORS.inputBoder,
  },
  sendBtn: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    backgroundColor: COLORS.orange,
  },
});
