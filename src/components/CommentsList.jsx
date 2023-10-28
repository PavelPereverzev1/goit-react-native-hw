import { FlatList, StyleSheet } from 'react-native';
import { getPostsList } from '../redux/selectors';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import COLORS from '../const/COLORS';

const CommentsList = ({ id }) => {
  const posts = useSelector(getPostsList);
  const items = posts.find(post => post.id === id).comments;

  return (
    <FlatList data={items} renderItem={({ item }) => <Comment {...item} />} />
  );
};

export default CommentsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: COLORS.textClr,
  },
});
