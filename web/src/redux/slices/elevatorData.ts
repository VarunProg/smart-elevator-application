import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface elevatorData {
  fabricationNumber: string;
  address: string;
  floorNumber: number;
  deviceIdentificationNumber: string;
  manufacturerName: string;
  productionYear: number;
  elevatorType: string;
  state: string;
  warningMessage?: string;
  reason?: string;
  lastInspection: string;
  chart?: {
    name: string;
    data: {
      time: string;
      door_cycles_count: number;
      door_openings_count: number;
      door_closings_count: number;
      door_closed_count: number;
      door_opened_count: number;
    }[];
  };
}

interface elevatorState {
  data: elevatorData[] | null;
}

const initialState: elevatorState = {
  data: null,
};

export const elevatorSlice = createSlice({
    name: 'elevator',
    initialState,
    reducers: {
      setElevatorData: (state, action: PayloadAction<elevatorData[]>) => {
        state.data = action.payload;
      },
    },
  });
  
  export const { setElevatorData } = elevatorSlice.actions;
  
  export const selectElevatorData = (state: RootState) => state.elevatorData.data;
  
  export default elevatorSlice.reducer;
