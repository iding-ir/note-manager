import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import newModalReducer from "./new";

const combinedReducers = combineReducers({
  newModal: newModalReducer,
  form: formReducer,
});

export default combinedReducers;
