import { createAction } from '@reduxjs/toolkit';

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

export const changingHoveredCard = createAction('changingHoveredCard', (value: number) => ({
  payload: value,
}));

