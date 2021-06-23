import * as Action from './actions';

const initialState = {
  userData: null,
  cats: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.addCat:
      return {...state, cats: [...state.cats, action.payload]};

    case Action.removeCat:
      return {
        ...state,
        cats: state.cats.filter(cats => cats.id !== action.payload.id),
      };

    case Action.updatCat:

      return {
        ...state,
        cats: [...state.cats, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
