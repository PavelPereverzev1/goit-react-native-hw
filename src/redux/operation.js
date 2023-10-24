import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase';
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';

const postsRef = collection(db, 'posts');
const q = query(collection(db, 'posts'));

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, thunkAPI) => {
    const querySnapshot = (await getDocs(q)).docs;
    const posts = [];
    querySnapshot.forEach(doc => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    return posts;
    try {
    } catch (error) {}
  }
);

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (newPost, thunkAPI) => {
    try {
      await setDoc(doc(postsRef), newPost);
    } catch (error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addComment = createAsyncThunk(
  'posts/addComment',
  async (data, thunkAPI) => {
    const { id, newComment } = data;
    const commentRef = doc(db, 'posts', id);
    // console.log(postsRef);
    await updateDoc(commentRef, {
      comments: arrayUnion(newComment),
    });
    return { id, newComment };
    try {
    } catch (error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
