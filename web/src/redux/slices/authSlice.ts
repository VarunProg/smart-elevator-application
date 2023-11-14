// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: any; // Replace 'any' with the actual type of your user data
  // Add other relevant authentication data with their types
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  // Initialize other authentication data
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    // Add other reducers for additional authentication data
  },
});

export const { setAuthenticated, setUser } = authSlice.actions;
export default authSlice.reducer;
