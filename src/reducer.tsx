import { createReducer } from '@reduxjs/toolkit';
import { changingCity, changingSortingPopular, changingSortingPriceHighToLow, changingSortingPriceLowToHigh, changingSortingTopRatedFirst, changingHoveredCard } from './action.tsx';
import { offersData } from './mocks/offers-mocks';

const initialState = {
  city: 'Paris',
  offersList: offersData.filter((of) => of.city === 'Paris'),
  sorting: 'Popular',
  hoveredCard: 0,
};

const reducer = createReducer(initialState, (builder) => {
  console.log('jghgfhfhg');
  builder
    .addCase(changingCity, (state, action) => {
      state.city = action.payload;
      state.offersList = offersData.filter((off) => off.city === state.city);
    })
    .addCase(changingSortingPopular, (state, action) => {
     state.sorting = action.payload;
     state.offersList = offersData;
    })
    .addCase(changingSortingPriceHighToLow, (state, action) => {
      state.sorting = action.payload;
      state.offersList = state.offersList.sort((a, b) => b.price - a.price);
    })
    .addCase(changingSortingPriceLowToHigh, (state, action) => {
      state.sorting = action.payload;
      state.offersList = state.offersList.sort((a, b) => a.price - b.price);
    })
    .addCase(changingSortingTopRatedFirst, (state, action) => {
      state.sorting = action.payload;
      state.offersList = state.offersList.sort((a, b) => b.rating - a.rating);
    })
    .addCase(changingHoveredCard, (state, action) => {
      console.log(action, state);
      state.hoveredCard = action.payload;
    })

});

export { reducer };
