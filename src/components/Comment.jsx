import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../const/COLORS';

const Comment = ({ name, commentText, timeStamp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.comment}>{commentText}</Text>
      <Text style={styles.timeStamp}>{timeStamp}</Text>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginBottom: 24,
    backgroundColor: COLORS.commentBg,
  },
  name: {
    color: COLORS.textClr,
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
  comment: {
    width: '100%',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: COLORS.textClr,
  },
  timeStamp: {
    width: '100%',
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: COLORS.gray,
    textAlign: 'right',
  },
});
