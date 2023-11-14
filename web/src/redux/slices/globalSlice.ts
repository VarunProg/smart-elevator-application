import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IGlobalInitialState {
  error: Error | null;
}
const initialState:IGlobalInitialState = {
  error: null,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<Error | null>) => {
      state.error = action.payload
    },
  },
})

export const { setError } = globalSlice.actions

export const getError = (state: RootState) => state

export default globalSlice.reducer