import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from './const';
import { auth, sortingAndOffersList, offer} from './slice';

export const rootReducer = combineReducers({
  [NameSpace.Auth]: auth.reducer,
  [NameSpace.Sorting]: sortingAndOffersList.reducer,
  [NameSpace.Offer]: offer.reducer,
});
