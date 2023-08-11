import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  showModal: false,
  movie: null,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
     login: (state, action) => {
      state.user = action.payload
     },
     logout: (state) => {
      state.user = null;
     },
     openModal: (state) => {
      state.showModal = true;
     },
     closeModal:(state) => {
      state.showModal = false;
     },
     setMovie:(state,action) => {
      state.movie = action.payload;
     }
  },

});

export const { login, logout, openModal, closeModal, setMovie } = userSlice.actions;

export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
