/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { MouseEventHandler, useRef } from 'react';
import { useDispatch } from 'react-redux';
import '../../../styles/controls.css';
import { getMovies } from '../../../utils/queries';
import { movieSearch } from '../../../redux/actionCreators';
import { MOVIES_SORT } from '../../../constants';

/*
  }, [searchValueRef]); // странно делать такую зависимость
  const moreHandler = () => {
    if (searchValueRef.current && searchValueRef.current.value !== '') {
      getMovies(searchValueRef.current.value, response.Search.length / 10 + 1)
        .then((result: Test) => {
          if (result.Response !== 'False') {
            setResponse((prevState) => {
              let i = 0;
              while (prevState.Search.length > i) {
                result.Search.push(prevState.Search[i]);
                i += 1;
              }
              // console.log(newState);
              return result;
            });
          }
        });
    }
  };
*/

type Props = {
  Response: string,
  Search: Array<any>,
  totalResults: string,
  Error: string
};

const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const searchValueRef = useRef<any>();

  const searchHandler = () => {
    if (searchValueRef.current && searchValueRef.current.value) {
      getMovies(searchValueRef.current.value)
        .then((result: Props) => {
          dispatch(movieSearch(result));
        });
    }
  };

  const sortHandler = () => {
    dispatch({ type: MOVIES_SORT });
  };
  return (
    <div className="controls">
      <p>
        <label htmlFor="search">Title: </label>
        <input ref={searchValueRef} type="text" id="search" placeholder="past movie tite here" required />
        <input type="button" onClick={searchHandler} className="control-button" value="Search" />
      </p>
      <button type="button" onClick={sortHandler} className="control-button">Sort by date</button>
    </div>
  );
};

export default Controls;
