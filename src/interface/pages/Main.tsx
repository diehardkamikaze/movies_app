import React, { useCallback, useState, useRef } from 'react';
import { connect } from 'react-redux';
import Controls from './Main/Controls';
import Items from './Main/Items';
import { getMovies } from '../../utils/queries';
import ErrorMsg from './Main/ErrorMsg';

type Props = {
  Response: string,
  Search: Array<any>,
  totalResults: string,
  Error: string
};

const MainOld: React.FC<Props> = (props) => {
  const { Response, Search, Error } = props;
  return (
    <>
      <Controls />
      { Response !== 'False' ? <Items fullitems={Search} /> : <ErrorMsg message={Error} />}
    </>
  );
};

const mapStateToProps = (state: Props) => state;

const Main = connect(mapStateToProps)(MainOld);

export default Main;
