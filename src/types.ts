export type OffersType = {
  id: number;
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
  avatar: string;
  name: string;
  raiting: number;
  date: number;
  text: string;
};

export type ReviewsTypes = ReviewsType[];
