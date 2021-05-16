import { MOVIES_SORT, MOVIE_SEARCH, MOVIES_MORE } from '../constants';

export function movieSearch(payload) {
  return {
    type: MOVIE_SEARCH,
    payload,
  };
}

export function movieMore(payload) {
  return {
    type: MOVIES_MORE,
    payload,
  };
}
