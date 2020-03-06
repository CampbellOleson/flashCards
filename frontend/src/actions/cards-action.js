import * as APIUtil from "./utils/cards-api-util";
export const RECEIVE_CARDS = "RECEIVE_CARDS";

const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards: cards
});

export const getCards = () => dispatch =>
  APIUtil.fetchCards().then(cards => dispatch(receiveCards(cards)));
