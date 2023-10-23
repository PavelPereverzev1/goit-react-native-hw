import { createSlice } from '@reduxjs/toolkit';
import { addPost, getPosts } from '../operation';

const postsInitialState = {
  items: [],
  error: null,
  isLoading: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  extraReducers: builder =>
    builder
      .addCase(addPost.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getPosts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const postsReducer = postsSlice.reducer;
