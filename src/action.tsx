import { createAction } from '@reduxjs/toolkit';

export const changingCity = createAction('changingCity', (value: string) => ({
  payload: value,
}));
