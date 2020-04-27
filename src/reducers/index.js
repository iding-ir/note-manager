import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import newReducer from "./new";
import notesReducer from "./notes";

const combinedReducers = combineReducers({
  new: newReducer,
  form: formReducer,
  notes: notesReducer,
});

export default combinedReducers;
