import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  showModal: false,
  movieId: null,
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
     setMovieId:(state,action) => {
      state.movieId = action.payload;
     }
  },

});

export const { login, logout, openModal, closeModal, setMovieId } = userSlice.actions;

export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
