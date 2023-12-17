import { OffersTypes } from '../types.ts';
import { ReviewsTypes } from '../types.ts';

export const offersData: OffersTypes = [
  {
    id: 1345,
    photos: 'img/amsterdam.jpg',
    title: 'flat in Amsterdam',
    description: 'nice flat',
    type: 'flat',
    bedroomsQuantity: 3,
    price: 456,
  },
  {
    id: 1234,
    photos: 'img/amsterdam@2x.jpg',
    title: 'house in Amsterdam',
    description: 'nice house',
    type: 'house',
    bedroomsQuantity: 5,
    price: 1000,
  },
  {
    id: 1456,
    photos: 'img/apartment-01.jpg',
    title: 'apartment in Amsterdam',
    description: 'nice apartment',
    type: 'apartment',
    bedroomsQuantity: 7,
    price: 500,
  },
  {
    id: 4567,
    photos: 'img/apartment-03.jpg',
    title: 'apartment in Amsterdam',
    description: 'good apartment',
    type: 'apartment',
    bedroomsQuantity: 1,
    price: 200,
  },

];

export const reviews: ReviewsTypes = [
  {
    avatar: 'img/avatar.svg',
    name: 'Alex',
    raiting: 3434,
    date: 14072020,
    text: 'good choice',
  },
  {
    avatar: 'img/avatar.svg',
    name: 'Leo',
    raiting: 3474,
    date: 14020,
    text: 'bad choice',
  },
  {
    avatar: 'img/avatar.svg',
    name: 'Ramy',
    raiting: 3554,
    date: 14074420,
    text: 'good choice',
  },
  {
    avatar: 'img/avatar.svg',
    name: 'Moty',
    raiting: 994,
    date: 1436320,
    text: 'good choice',
  }


];
