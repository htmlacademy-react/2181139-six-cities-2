import { createAction } from '@reduxjs/toolkit';
import { OffersTypes, ReviewsTypes , AuthorizationStatusType} from './types';
import { AuthorizationStatus } from './const';

export const changingCity = createAction('changingCity', (value: string) => ({
  payload: value,
}));

export const changingSortingPopular = createAction('changingSortingPopular', (value: string) => ({
  payload: value,
}));

export const changingSortingPriceLowToHigh = createAction('changingSortingPriceLowToHigh', (value: string) => ({
  payload: value,
}));

export const changingSortingPriceHighToLow = createAction('changingSortingPriceHighToLow', (value: string) => ({
  payload: value,
}));

export const changingSortingTopRatedFirst = createAction('changingSortingTopRatedFirst', (value: string) => ({
  payload: value,
}));

export const changingHoveredCard = createAction('changingHoveredCard', (value: string) => ({
  payload: value,
}));

export const loadingCards = createAction('loadingCards', (value: OffersTypes) => ({
  payload: value
}));

export const loadingReviews = createAction('loadingReviews', (value: ReviewsTypes) => ({
  payload: value
}));

export const setDataLoadingStatus = createAction<boolean>('setDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setAuthData = createAction('setAuthData', (value: AuthorizationStatusType) => ({
  payload: value
}));

