import { createSlice } from '@reduxjs/toolkit';
import { addPost, getPosts } from './operation';

const initialState = {
  items: [],
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addPost.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const postsReducer = postsSlice.reducer;
