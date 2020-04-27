import { combineReducers } from "redux";

import newModalReducer from "./new";

const combinedReducers = combineReducers({
  newModal: newModalReducer,
});

export default combinedReducers;
