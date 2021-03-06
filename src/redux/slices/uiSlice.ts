import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  filtersToggled: window.innerHeight > 1024 ? false : true,
};
const { actions, reducer } = createSlice({
  name: 'uiData',
  initialState: initialState,
  reducers: {
    toggleFilters(state, action: PayloadAction<boolean>) {
      state.filtersToggled = action.payload;
      if (window.innerWidth > 1023) {
        state.filtersToggled = true;
      }
      return state;
    },
  },
});

export { actions, reducer };
