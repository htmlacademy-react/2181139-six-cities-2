import { createAction } from '@reduxjs/toolkit';

export const changingCity = createAction('changingCity', (value) => {
  return {
    payload: value,
  }
});
