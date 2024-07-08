// import { createReducer } from '@reduxjs/toolkit';
// import { loadingReviews, getOffer, getOffersNearby, setComment } from './action.tsx';
// import { OffersTypes, ReviewsTypes,OfferCardType } from './types.tsx';


// type StateType = {
//   reviews: ReviewsTypes;
//   offer: OfferCardType;
//   offersNearby: OffersTypes;
// }

// const initialState: StateType = {
//   reviews: [],
//   offer: {
//     id: '',
//     title: '',
//     type: '',
//     price: 0,
//     city: {
//       name: '',
//       location: {
//         latitude: 0,
//         longitude: 0,
//         zoom: 0,
//       },
//     },
//     location: {
//       latitude: 0,
//       longitude: 0,
//       zoom: 0,
//     },
//     isFavorite: false,
//     isPremium: false,
//     rating: 0,
//     description: '',
//     bedrooms: 0,
//     goods: [''],
//     host: {
//       name: '',
//       avatarUrl: '',
//       isPro: false,
//     },
//     images: [''],
//     maxAdults: 0,
//   },
//   offersNearby: []
// };


// const reducer = createReducer(initialState, (builder) => {
//   builder

//     // .addCase(changingHoveredCard, (state, action) => {
//     //   state.hoveredCard = action.payload;
//     // })
//     .addCase(loadingReviews, (state, action) => {
//       state.reviews = action.payload;
//     })
//     // .addCase(setDataLoadingStatus, (state, action) => {
//     //   state.isOffersDataLoading = action.payload;
//     // })
//     //.addCase(requireAuthorization, (state, action) => {
//     //   state.authorizationStatus = action.payload;
//     // })
//     // .addCase(setAuthData, (state, action) => {
//     //   state.authorizationData = action.payload;
//     // })
//     .addCase(getOffer, (state, action) => {
//       state.offer = action.payload;
//     })
//     .addCase(getOffersNearby, (state, action) => {
//       state.offersNearby = action.payload;
//     })
//     .addCase(setComment, (state, action) => {
//       state.reviews = [...state.reviews, action.payload];
//     });

// });

// export { reducer };
