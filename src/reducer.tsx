import { createReducer } from '@reduxjs/toolkit';
import { changingCity, changingSortingPopular, changingSortingPriceHighToLow, changingSortingPriceLowToHigh, changingSortingTopRatedFirst, changingHoveredCard, loadingCards, loadingReviews, setQuestionsDataLoadingStatus } from './action.tsx';
import { OffersType ,OffersTypes, ReviewsTypes} from './types.tsx';

type stateType = {
  city: string,
  offersList: OffersTypes ,
  sorting: string,
  hoveredCard: string,
  reviews: ReviewsTypes,
  isQuestionsDataLoading: boolean,
}

const initialState : stateType= {
  city: 'Paris',
  offersList: [],
  sorting: 'Popular',
  hoveredCard: '0',
  reviews: [],
  isQuestionsDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changingCity, (state, action) => {
      state.city = action.payload;
      state.offersList = state.offersList.filter((off: OffersType) => off.city.name === state.city);
    })
    .addCase(changingSortingPopular, (state, action) => {
      state.sorting = action.payload;
      state.offersList = state.offersList;
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
      state.hoveredCard = action.payload;
    })
    .addCase(loadingCards, (state, action) => {
      state.offersList = action.payload;

    })
    .addCase(loadingReviews, (state, action) => {
     state.reviews = action.payload;
    })
    .addCase(setQuestionsDataLoadingStatus, (state, action) => {
      state.isQuestionsDataLoading = action.payload;
    })
});

export { reducer };
