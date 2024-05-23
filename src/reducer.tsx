import { createReducer } from '@reduxjs/toolkit';
import { changingCity, changingSortingPopular, changingSortingPriceHighToLow, changingSortingPriceLowToHigh, changingSortingTopRatedFirst, changingHoveredCard, loadingCards, loadingReviews, setDataLoadingStatus, requireAuthorization, getOffer, getOffersNearby, setComment} from './action.tsx';
import { OffersTypes, ReviewsTypes, AuthorizationStatusType, OfferCardType} from './types.tsx';
import { AuthorizationStatus } from './const.tsx';
import { setAuthData } from './action.tsx';

type StateType = {
  city: string;
  offersList: OffersTypes ;
  sorting: string;
  hoveredCard: string;
  reviews: ReviewsTypes;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  authorizationData: AuthorizationStatusType;
  offer: OfferCardType;
  offersNearby: OffersTypes;
}

const initialState : StateType = {
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
  offer: {
    id: '',
    title: '',
    type: '',
    price: 0,
    city: {
      name: '',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    isFavorite: false,
    isPremium: false,
    rating: 0,
    description: '',
    bedrooms: 0,
    goods: [''],
    host: {
      name: '',
      avatarUrl: '',
      isPro: false,
    },
    images: [''],
    maxAdults: 0,
  },
  offersNearby: []
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
    })
    .addCase(getOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(getOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(setComment , (state, action) => {
      state.reviews = [...state.reviews, action.payload];
    });
});

export { reducer };
