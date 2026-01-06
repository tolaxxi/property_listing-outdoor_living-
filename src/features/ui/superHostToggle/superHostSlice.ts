import { createSlice } from '@reduxjs/toolkit';

export interface SuperHostState {
  isChecked: boolean;
}
const initialState: SuperHostState = {
  isChecked: false,
};

export const superHostSlice = createSlice({
  name: 'superHost',
  initialState,
  reducers: {
    toggleSuperHost: (state) => {
      state.isChecked = !state.isChecked;
    },
  },
});

export const { toggleSuperHost } = superHostSlice.actions;
export default superHostSlice.reducer;
