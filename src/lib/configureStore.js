import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from 'history';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";



export default function configureStore() {
  const history = createBrowserHistory();
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
  );

  return { store, history };
}
