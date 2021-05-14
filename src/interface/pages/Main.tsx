import React, { useCallback, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { resourceLimits } from 'worker_threads';
import Controls from './Main/Controls';
import Items from './Main/Items';
import { getMovies } from '../../utils/queries';
import { NOTHING_TXT } from '../../constants';
import ErrorMsg from './Main/ErrorMsg';

type Test = {
  Response: string,
  Search: Array<any>,
  totalResults: string,
  Error: string
};

const Main: React.FC = () => {
  const [response, setResponse] = useState<Test>({
    Response: 'False', Error: NOTHING_TXT, totalResults: '-1', Search: [],
  });
  // Можно обойтись без рефа, просто для практики
  const searchValueRef = useRef<HTMLInputElement>(null);
  const searchHandler = useCallback(() => {
    if (searchValueRef.current && searchValueRef.current.value !== '') {
      getMovies(searchValueRef.current.value)
        .then((result: Test) => {
          setResponse(result);
        });
    }
  }, [searchValueRef]); // странно делать такую зависимость
  const moreHandler = () => {
    if (searchValueRef.current && searchValueRef.current.value !== '') {
      getMovies(searchValueRef.current.value, response.Search.length / 10 + 1)
        .then((result: Test) => {
          console.log(result);
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

  const sortHandler = () => {
    setResponse(
      {
        ...response,
        Search: response.Search.sort((a, b) => parseInt(a.Year, 10) - parseInt(b.Year, 10)),
      },
    );
  };

  return (
    <>
      <Controls sortHandler={sortHandler} searchHandler={searchHandler} ref={searchValueRef} />
      { response.Response !== 'False' ? <Items moreHandler={moreHandler} fullitems={response.Search} /> : <ErrorMsg message={response.Error} />}
    </>
  );
};

export default Main;
