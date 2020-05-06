import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { googleAuth2Reducer } from "react-redux-google-auth2";

import modalReducer from "./modal";
import notesReducer from "./notes";

const combinedReducers = combineReducers({
  modal: modalReducer,
  form: formReducer,
  notes: notesReducer,
  googleAuth2: googleAuth2Reducer,
});

export default combinedReducers;
