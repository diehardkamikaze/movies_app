import { MOVIES_SORT, MOVIE_SEARCH, MOVIES_MORE } from '../../constants';

export default function rootReducer(state, action) {
  switch (action.type) {
    case MOVIES_MORE:
      if (action.payload.Search.length) {
        return { ...state, Search: state.Search.concat(action.payload.Search) };
      }
      return state;
    case MOVIE_SEARCH:
      return action.payload;
    case MOVIES_SORT:
      return {
        ...state,
        Search: [...state.Search].sort((a, b) => parseInt(a.Year, 10) - parseInt(b.Year, 10)),
      };
    default:
      return state;
  }
}
