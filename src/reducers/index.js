import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import modalReducer from "./modal";
import notesReducer from "./notes";

const combinedReducers = combineReducers({
  modal: modalReducer,
  form: formReducer,
  notes: notesReducer,
});

export default combinedReducers;
