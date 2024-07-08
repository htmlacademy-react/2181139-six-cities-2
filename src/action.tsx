import { createAction } from '@reduxjs/toolkit';
import { OffersTypes, ReviewsTypes , OfferCardType, ReviewType} from './types';

export const loadingReviews = createAction('loadingReviews', (value: ReviewsTypes) => ({
  payload: value
}));

export const getOffer = createAction('getOffer', (value: OfferCardType) => ({
  payload:value
}));

export const getOffersNearby = createAction('getOffersNearby', (value: OffersTypes) => ({
  payload: value
}));

export const setComment = createAction('setComment', (value: ReviewType) => ({
  payload: value
}));

