const SEARCH_API = new URL('https://www.omdbapi.com/');
SEARCH_API.searchParams.set('apikey', 'f62f1494');

const DETAILS_API = new URL('https://www.omdbapi.com/');
DETAILS_API.searchParams.set('apikey', 'f62f1494');

const NOTHING_TXT = 'Use search input to find movies';

// ACTIONS
const MOVIE_SEARCH = 'MOVIE_SEARCH';
const MOVIES_SORT = 'MOVIE_SORT';
const MOVIES_MORE = 'MOVIES_MORE';

export {
  SEARCH_API, DETAILS_API, NOTHING_TXT, MOVIE_SEARCH, MOVIES_SORT, MOVIES_MORE,
};
