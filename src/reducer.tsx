import { createReducer } from '@reduxjs/toolkit';
import { changingCity, changingSortingPopular, changingSortingPriceHighToLow, changingSortingPriceLowToHigh, changingSortingTopRatedFirst, changingHoveredCard, loadingCards, loadingReviews, setDataLoadingStatus, requireAuthorization} from './action.tsx';
import { OffersTypes, ReviewsTypes, AuthorizationStatusType} from './types.tsx';
import { AuthorizationStatus } from './const.tsx';
import { setAuthData } from './action.tsx';

type stateType = {
  city: string;
  offersList: OffersTypes ;
  sorting: string;
  hoveredCard: string;
  reviews: ReviewsTypes;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  authorizationData: AuthorizationStatusType;
}

const initialState : stateType = {
  city: 'Paris',
  offersList: [],
  sorting: 'Popular',
  hoveredCard: '0',
  reviews: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  authorizationData: {
    name: '',
    avatarUrl: '',
    isPro: false,
    email: '',
    token: ''
  },
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changingCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changingSortingPopular, (state, action) => {
      state.sorting = action.payload;
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
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthData, (state, action) => {
      state.authorizationData = action.payload;
    });
});

export { reducer };
