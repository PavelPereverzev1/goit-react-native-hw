import { createSlice } from '@reduxjs/toolkit';

const InitialState = {
  name: null,
  email: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});
