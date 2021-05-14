import React, { MouseEventHandler } from 'react';
import Item from './Item';
import '../../../styles/items.css';

type Props = {
  fullitems: Array<any>,
  moreHandler: MouseEventHandler<HTMLButtonElement> | undefined,
};

const Items: React.FC<Props> = ({ fullitems, moreHandler }) => (
  <>
    <ul className="search">
      {fullitems.map((item) => (
        <Item
          key={item.imdbID}
          Poster={item.Poster}
          Title={item.Title}
          Type={item.Type}
          Year={item.Year}
          imdbID={item.imdbID}
        />
      ))}
    </ul>
    <button type="button" onClick={moreHandler} className="button more">More movies</button>
  </>
);

export default Items;
