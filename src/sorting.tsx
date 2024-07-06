import { useAppDispatch } from './hooks';
import { useState } from 'react';
import { sortingAndOffersList } from './slice';
import { NameSpace } from './const';
import { useSelector } from 'react-redux';
import { State } from './types';

export default function Sorting(): JSX.Element {

  const dispatch = useAppDispatch();
  const sortingFromState: string = useSelector((state: State) => state[NameSpace.Sorting].sorting);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleClick}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortingFromState}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <div>
        <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`} >
          <li className={`places__option ${sortingFromState === 'Popular' ? 'places__option--active' : ''}`} tabIndex={0} onClick={function selectSorting1() {
            dispatch(sortingAndOffersList.actions.changingSortingPopular('Popular'));
          }}
          >Popular
          </li>
          <li className={`places__option ${sortingFromState === 'Low to high' ? 'places__option--active' : ''}`} tabIndex={0} onClick={function selectSorting2() {
            dispatch(sortingAndOffersList.actions.changingSortingPriceLowToHigh('Low to high'));
          }}
          > Price: low to high
          </li>
          <li className={`places__option ${sortingFromState === 'High to low' ? 'places__option--active' : ''}`} tabIndex={0} onClick={function selectSorting3() {
            dispatch(sortingAndOffersList.actions.changingSortingPriceHighToLow('High to low'));
          }}
          > Price: high to low
          </li>
          <li className={`places__option ${sortingFromState === 'Top rated first' ? 'places__option--active' : ''}`} tabIndex={0} onClick={function selectSorting4() {
            dispatch(sortingAndOffersList.actions.changingSortingTopRatedFirst('Top rated first'));
          }}
          > Top rated first
          </li>
        </ul>
      </div>
    </form>);
}
