import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import RootReducer from "../reducers/root-reducer";

let middleware = [thunk, logger];

if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware];
  // if mode isn't production apply thunk and logger
} else {
  middleware = [thunk];
  // if mode isn't production then only apply thunk (logger would be bad)
}

const configureStore = (preloadedState = {}) => {
  // since this is a function, we can pass it a preloaded state
  // if we don't pass any it is automatically initilized to be empty object
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
