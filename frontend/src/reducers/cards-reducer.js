import { RECEIVE_CARDS } from "../actions/cards-action";

const cardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CARDS:
      return Object.assign(state, action.cards);
    default:
      return state;
  }
};

export default cardsReducer;
