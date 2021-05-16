import React, { MouseEventHandler } from 'react';
import Item from './Item';
import '../../../styles/items.css';

type Props = {
  fullitems: Array<any>,
};

const Items: React.FC<Props> = ({ fullitems }) => (
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
);

export default Items;
