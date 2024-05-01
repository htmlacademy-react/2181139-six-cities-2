import { changingSortingPopular, changingSortingPriceHighToLow, changingSortingPriceLowToHigh, changingSortingTopRatedFirst} from './action';
import { useAppDispatch, useAppSelector } from './hooks';

export default function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const sortingFromState = useAppSelector((state) => state.sorting);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortingFromState}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className={`places__option ${sortingFromState === 'Popular' ? 'places__option--active' : ''}`} tabIndex={0} onClick={function selectSorting1() {
          dispatch(changingSortingPopular('Popular'));
        }}
        >Popular
        </li>
        <li className={`places__option ${sortingFromState === 'Low to high' ? 'places__option--active' : ''}`} tabIndex={0} onClick={function selectSorting2() {
          dispatch(changingSortingPriceLowToHigh('Low to high'));
        }}
        > Price: low to high
        </li>
        <li className={`places__option ${sortingFromState === 'High to low' ? 'places__option--active' : ''}`} tabIndex={0} onClick={function selectSorting3() {
          dispatch(changingSortingPriceHighToLow('High to low'));
        }}
        > Price: high to low
        </li>
        <li className={`places__option ${sortingFromState === 'Top rated first' ? 'places__option--active' : ''}`} tabIndex={0} onClick={function selectSorting4() {
          dispatch(changingSortingTopRatedFirst('Top rated first'));
        }}
        > Top rated first
        </li>
      </ul>
    </form>);
}
