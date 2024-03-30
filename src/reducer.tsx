import { createReducer } from '@reduxjs/toolkit';
import { changingCity } from './action.tsx';
import { offersData } from './mocks/offers-mocks';

const initialState = {
  city: 'Paris',
  offersList: offersData
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changingCity, (state, action) => {
      state.city = action.payload;
      state.offersList = offersData.filter((off) => off.city === state.city);
    });
});

export { reducer };
