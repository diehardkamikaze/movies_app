import { SEARCH_API, DETAILS_API } from '../constants';

const getMovies = (query: string, page = 1) => {
  SEARCH_API.searchParams.set('s', query);
  SEARCH_API.searchParams.set('page', page.toString());
  return fetch(SEARCH_API.toString())
    .then((responce) => responce.json())
    .then((result) => result)
    .catch((error) => { console.log(error); return { Response: 'False', Error: 'Network Error' }; });
};

const getDetails = (id: string) => {
  // EDIT return value
  DETAILS_API.searchParams.set('i', id);
  return fetch(DETAILS_API.toString())
    .then((responce) => responce.json())
    .then((result) => result)
    .catch((error) => { console.log(error); return { Response: 'False', Error: 'Network Error' }; });
};

export { getMovies, getDetails };
