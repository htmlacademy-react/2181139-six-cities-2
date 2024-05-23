import FormForReview from './form-for-review';
import { ReviewTypeList } from '../types';
import Review from './review';
import { AuthorizationStatus } from '../const';
import { useAppSelector } from '../hooks';

type ReviewsPropType = {
  reviews: ReviewTypeList;
}

export default function ReviewCard({ reviews }: ReviewsPropType): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const allReviews = reviews;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {allReviews.map((review) => (
          <li className="reviews__item" key={review.id}>
            <div>
              <Review review={review} />
            </div>
          </li>
        ))}
      </ul>
      {authStatus === AuthorizationStatus.Auth ? (<FormForReview />) : ''}

    </section>);

}


