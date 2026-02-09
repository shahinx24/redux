import { configureStore, applyMiddleware, compose } from "redux";
import counterReducer from "../features/counter/counterSlice";
import logger from "../app/loggerMiddleware";

// Enable Redux DevTools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  counterReducer,
  composeEnhancers(
    applyMiddleware(logger)
  )
);

export default store;