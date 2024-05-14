import { AppDispatch, State, AuthDataType } from './types';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OffersTypes, ReviewsTypes, AuthorizationStatusType } from './types';
import { loadingReviews, setDataLoadingStatus, requireAuthorization, setAuthData } from './action';
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


