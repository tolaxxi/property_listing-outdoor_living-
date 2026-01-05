import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Properties } from '../../../types/propertyListing';

export interface ModalState {
  isOpen: boolean;
  selectedProperty: Properties | null;
}
const initialState: ModalState = {
  isOpen: false,
  selectedProperty: null,
};

export const modalSlice = createSlice({
  name: 'property modal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<Properties>) => {
      state.isOpen = true;
      state.selectedProperty = action.payload;
    },
    close: (state) => {
      state.isOpen = false;
      state.selectedProperty = null;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
