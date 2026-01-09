import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PropertyTypeKey } from '../../../utils/constants';

export interface PropertyTypeState {
  oneToTwoPeople: boolean;
  threeToFourPeople: boolean;
  fivePlusPeople: boolean;
}
const initialState: PropertyTypeState = {
  oneToTwoPeople: false,
  threeToFourPeople: false,
  fivePlusPeople: false,
};

export const propertyTypeSlice = createSlice({
  name: 'PropertyType',
  initialState,
  reducers: {
    selectPropertyType: (state, action: PayloadAction<PropertyTypeKey>) => {
      const KEY = action.payload;
      Object.keys(state).forEach((key) => {
        state[key as PropertyTypeKey] = false;
      });
      state[KEY] = true;
    },
  },
});

export const { selectPropertyType } = propertyTypeSlice.actions;
export default propertyTypeSlice.reducer;
