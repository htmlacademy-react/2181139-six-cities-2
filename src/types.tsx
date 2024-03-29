import { store } from './store.tsx';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OffersType = {
  id: number;
  city: string;
  photos: string;
  title: string;
  description: string;
  type: string;
  bedroomsQuantity: number;
  price: number;
  lat: number;
  lng: number;
};

export type OffersTypes = OffersType[];

export type ReviewsType = {
  id: number;
  avatar: string;
  name: string;
  raiting: number;
  date: number;
  text: string;
};

export type ReviewsTypes = ReviewsType[];



