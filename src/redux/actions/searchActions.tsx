import { MOVIE_SEARCH, MOVIES_SORT, MOVIES_MORE } from '../../constants';
import { SearchActionType, MoreActionType } from './searchActionsTypes';

const searchAction: SearchActionType = (query) => ({ type: MOVIE_SEARCH, payload: query });

const sortAction = { type: MOVIES_SORT };

type Mat = MoreActionType;
const moreAction: Mat = (query, page) => ({ type: MOVIES_MORE, payload: { query, page } });

export { searchAction, sortAction, moreAction };
