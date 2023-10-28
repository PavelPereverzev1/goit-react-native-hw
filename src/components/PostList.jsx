import { FlatList, RefreshControl, Text, View, StyleSheet } from 'react-native';
import { getIsLoading, getPostsList } from '../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../redux/operation';
import Post from './Post';
import COLORS from '../const/COLORS';

const PostLIst = () => {
  const items = useSelector(getPostsList);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refrehing={isLoading}
          onRefresh={() => {
            dispatch(getPosts());
          }}
        />
      }
      ListEmptyComponent={
        <View style={styles.container}>
          <Text style={styles.text}>Нажаль постів поки не має.</Text>
        </View>
      }
      data={items}
      renderItem={({ item }) => <Post {...item} />}
    />
  );
};

export default PostLIst;

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
