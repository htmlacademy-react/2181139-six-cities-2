
import { store } from './index.tsx';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OffersType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string,
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    }
  },
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  previewImage: string

};

export type OffersTypes = OffersType[];

export type OfferCardType =
  {
    id: string,
    title: string,
    type: string,
    price: number,
    city: {
      name: string,
      location: {
        latitude: number,
        longitude: number,
        zoom: number
      }
    },
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    },
    isFavorite: boolean,
    isPremium: boolean,
    rating: number,
    description: string,
    bedrooms: number,
    goods: string[],
    host: {
      name: string
      avatarUrl: string,
      isPro: boolean
    },
    images: string[],
    maxAdults: number
  }

export type ReviewsType = {
  id: string
  date: string,
  user: {
    name: string,
    avatarUrl: string,
    isPro: boolean
  },
  comment: string,
  rating: number

};

export type ReviewsTypes = ReviewsType[];
