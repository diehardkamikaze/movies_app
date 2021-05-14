import { MOVIES_SORT } from '../../constants';
import { SortAction, State } from './sortReducerTypes';

const initialState: State = {
  Response: 'Error', Search: [], totalResults: '-1', Error: '',
};

const sortReducer = (state: State = initialState, action: SortAction) => {
  switch (action.type) {
    case MOVIES_SORT:
      return {
        ...state,
        Search: state.Search.sort((a, b) => parseInt(a.Year, 10) - parseInt(b.Year, 10)),
      };
    default:
      return state;
  }
};

export default sortReducer;
