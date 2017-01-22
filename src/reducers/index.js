import * as types from '../actions/constants';

const initialState = {
  isFetching: false, 
  items: [],
}

const rootReducer = (state = initialState, action) => {
  console.log(action.type, types.FETCH_ITEMS_SUCCEEDED)
  switch (action.type) {
    case types.FETCH_ITEMS_SUCCEEDED:
      return {
        isFetching: false,
        items: action.items,
      };
    case types.FETCH_ITEMS_REQUESTED:
      return {
        ...state,
        isFetching: true,
      }
    default:
      return state;
  }
}

export default rootReducer;