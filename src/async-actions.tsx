import { AppDispatch, State } from './types';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OffersTypes, ReviewsTypes } from './types';
import { loadingReviews, setQuestionsDataLoadingStatus } from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>
  (
    'loadingCards',
    async (_arg, { dispatch, extra: api }) => {
      dispatch(setQuestionsDataLoadingStatus(true));
      const { data } = await api.get<OffersTypes>('/six-cities/offers');
      dispatch(setQuestionsDataLoadingStatus(false));
      dispatch({type: 'loadingCards',payload: data});
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



