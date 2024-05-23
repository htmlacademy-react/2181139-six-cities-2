import { AppDispatch, State, AuthDataType, OfferCardType } from './types';
import { AxiosInstance, AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OffersTypes, ReviewsTypes, AuthorizationStatusType, ReviewFormType, ReviewType } from './types';
import { loadingReviews, setDataLoadingStatus, requireAuthorization, setAuthData, getOffer, getOffersNearby, setComment } from './action';
import { AuthorizationStatus } from './const';
import { saveToken } from './token';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>
(
  'loadingCards',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataLoadingStatus(true));
    const { data } = await api.get<OffersTypes>('/six-cities/offers');
    dispatch(setDataLoadingStatus(false));
    dispatch({ type: 'loadingCards', payload: data });
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>
(
  'loadingReviews',
  async (id: string, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewsTypes>(`/six-cities/comments/${id}`);
    dispatch(loadingReviews(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'requireAuthorization',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const resp = await api.get<AuthorizationStatusType>('/six-cities/login');
      if (resp.status === 200) {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setAuthData(resp.data));
      }

    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthDataType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const response = await api.post<AuthorizationStatusType>('/six-cities/login', { email, password });
      const token = response.data.token;

      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  });

export const fetchOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>
(
  'getOffer',
  async (id: string, { dispatch, extra: api }) => {
    const response = await api.get<OfferCardType>(`/six-cities/offers/${id}`);
    if (response.status === 404) {
      dispatch(getOffer({
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
      }));
    }
    dispatch(getOffer(response.data));
  },
);

export const fetchOffersNearby = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>
(
  'getOffersNearby',
  async (id: string, { dispatch, extra: api }) => {
    const response = await api.get<OffersTypes>(`/six-cities/offers/${id}/nearby`);

    dispatch(getOffersNearby(response.data));
  },
);

export type PostCommentParam = ReviewFormType & {id: string};

export const postComment = createAsyncThunk<void, PostCommentParam, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postComment',

  async ({id, rating, comment }, { dispatch, extra: api }) => {
    const response = await api.post<ReviewFormType, AxiosResponse<ReviewType>>(`/six-cities/comments/${id}`, { rating, comment});
    dispatch(setComment(response.data));

  }
);

