import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import newReducer from "./new";

const combinedReducers = combineReducers({
  new: newReducer,
  form: formReducer,
});

export default combinedReducers;
