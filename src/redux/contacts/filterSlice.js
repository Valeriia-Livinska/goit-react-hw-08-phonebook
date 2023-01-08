import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setContactsFiltration(state, action) {
      return action.payload;
    },
  },
});

export const { setContactsFiltration } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
