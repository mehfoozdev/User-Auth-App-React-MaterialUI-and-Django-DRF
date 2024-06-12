import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access_token: null,
}

export const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.access_token = action.payload.access_token;
    },
    unSetUserToken: (state) => {
      state.access_token = null;
    },
  },
})

export const { setUserToken, unSetUserToken } = authSlice.actions;

export default authSlice.reducer;