import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import api from './middleware/api'
import rootReducer from "./modules";

let store;

if (
  process.env.NODE_ENV !== "production" &&
  window._REDUX_DEVTOOLS_EXTENSION_
) {
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_;
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, api)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, api));
}

export default store;
