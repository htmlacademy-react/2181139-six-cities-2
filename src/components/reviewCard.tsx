import FormForReview from './form-for-review';
import { ReviewsTypes } from '../types';
import Review from './review';

type ReviewsPropType = {
  reviews: ReviewsTypes;
  // reviewsAmount : number;
}

export default function ReviewCard({ reviews }: ReviewsPropType): JSX.Element {
  const allReviews = reviews;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {allReviews.map((review) => (
          <li className="reviews__item" key={review.id}>
            <div>
              <Review review={review} />
            </div>
          </li>
        ))}
      </ul>
      <FormForReview />
    </section>);

}


