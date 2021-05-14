import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/item.css';

type Props = {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string,
};

const Item: React.FC<Props> = ({
  Poster, Title, Type, Year, imdbID,
}) => (
  <li className="item">
    <img src={Poster} alt="movie poster" />
    <h3>{Title}</h3>
    <p className="movie-type">
      Type:
      <span>{Type}</span>
    </p>
    <p className="year">
      Year:
      <span>{Year}</span>
    </p>
    <NavLink className="button details" to={`/movies/${imdbID}`}>More details..</NavLink>
  </li>
);

export default Item;
