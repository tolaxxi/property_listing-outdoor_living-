import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { NavItemsKey } from '../../../utils/constants';

export interface StayLocationType {
  allStays: boolean;
  norway: boolean;
  finland: boolean;
  sweden: boolean;
  switzerland: boolean;
}
export const initialState: StayLocationType = {
  allStays: true,
  norway: false,
  finland: false,
  sweden: false,
  switzerland: false,
};
export const StayLocationSlice = createSlice({
  name: 'stayLocation',
  initialState,
  reducers: {
    selectStayLocation: (state, action: PayloadAction<NavItemsKey>) => {
      const KEY = action.payload;
      Object.keys(state).forEach((key) => {
        state[key as NavItemsKey] = false;
      });
      state[KEY] = true;
    },
  },
});

export const { selectStayLocation } = StayLocationSlice.actions;
export default StayLocationSlice.reducer;
