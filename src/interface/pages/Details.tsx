import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDetails } from '../../utils/queries';
import Loader from '../Loader';
import '../../styles/details.css';

type Props = {
  Poster: string,
  Title: string,
  Awards: string,
  Plot: string,
  Type: string,
  Language: string,
  BoxOffice: string,
  Country: string,
  Released: string,
  Runtime: string,
  DVD: string, Genre: string,
  Rated: string,
  Metascore: string,
  imdbRating: string,
  Actors: string,
  Director: string,
  Writer: string,
};

const Details: React.FC = (props) => {
  const { id } = useParams<{ id: string }>();
  const [movieData, setMovieData] = useState<Props>();
  console.log(movieData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getDetails(id).then((result: Props) => setMovieData(result)); }, []);
  let toRender = null;
  if (!movieData) toRender = <Loader />;
  else {
    toRender = (
      <div className="page">
        <div className="poster">
          <img src={movieData.Poster} alt="movie poster" />
        </div>
        <div className="about-movie">
          <h1>{movieData.Title}</h1>
          <p className="small">
            Awards:
            <span>{movieData.Awards}</span>
          </p>
          <p className="plot">{movieData.Plot}</p>
          <table cellSpacing="0" cellPadding="0">
            <tr>
              <th>About movie:</th>
            </tr>
            <tr>
              <td>Type:</td>
              <td>{movieData.Type}</td>
            </tr>
            <tr>
              <td>Languages:</td>
              <td>{movieData.Language}</td>
            </tr>
            <tr>
              <td>Boxoffice:</td>
              <td>{movieData.BoxOffice}</td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>{movieData.Country}</td>
            </tr>
            <tr>
              <td>Released:</td>
              <td>{movieData.Released}</td>
            </tr>
            <tr>
              <td>Runtime:</td>
              <td>{movieData.Runtime}</td>
            </tr>
            <tr>
              <td>On DVD:</td>
              <td>{movieData.DVD}</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>{movieData.Genre}</td>
            </tr>
            <tr>
              <td>Rated:</td>
              <td>{movieData.Rated}</td>
            </tr>
            <tr>
              <td>Metascore:</td>
              <td>{movieData.Metascore}</td>
            </tr>
            <tr>
              <td>IMBD Rating:</td>
              <td>{movieData.imdbRating}</td>
            </tr>
          </table>
        </div>
        <div className="production">
          <h3>Actors:</h3>
          <ul>
            {movieData.Actors.split(',').map((actor) => (<li>{actor}</li>))}
          </ul>
          <h3>Director:</h3>
          <p>{movieData.Director}</p>
          <h3>Writer</h3>
          <p>{movieData.Writer}</p>
        </div>
      </div>
    );
  }
  return (toRender);
};

/* {
  Poster, Title, Awards, Plot, Type, Language, BoxOffice,
  Country, Released, Runtime, DVD, Genre, Rated, Metascore,
  imdbRating, Actors, Director, Writer,
}
  <div className="page">
    <div className="poster">
      <img src={Poster} alt="movie poster" />
    </div>
    <div className="about-movie">
      <h1>{Title}</h1>
      <p className="small">
        Awards:
        <span>{Awards}</span>
      </p>
      <p className="plot">{Plot}</p>
      <table cellSpacing="0" cellPadding="0">
        <tr>
          <th>About movie:</th>
        </tr>
        <tr>
          <td>Type:</td>
          <td>{Type}</td>
        </tr>
        <tr>
          <td>Languages:</td>
          <td>{Language}</td>
        </tr>
        <tr>
          <td>Boxoffice:</td>
          <td>{BoxOffice}</td>
        </tr>
        <tr>
          <td>Country:</td>
          <td>{Country}</td>
        </tr>
        <tr>
          <td>Released:</td>
          <td>{Released}</td>
        </tr>
        <tr>
          <td>Runtime:</td>
          <td>{Runtime}</td>
        </tr>
        <tr>
          <td>On DVD:</td>
          <td>{DVD}</td>
        </tr>
        <tr>
          <td>Genre:</td>
          <td>{Genre}</td>
        </tr>
        <tr>
          <td>Rated:</td>
          <td>{Rated}</td>
        </tr>
        <tr>
          <td>Metascore:</td>
          <td>{Metascore}</td>
        </tr>
        <tr>
          <td>IMBD Rating:</td>
          <td>{imdbRating}</td>
        </tr>
      </table>
    </div>
    <div className="production">
      <h3>Actors:</h3>
      <ul>
        {Actors.map((actor) => (<li>{actor}</li>))}
      </ul>
      <h3>Director:</h3>
      <p>{Director}</p>
      <h3>Writer</h3>
      <p>{Writer}</p>
    </div>
  </div>
);
*/
export default Details;
