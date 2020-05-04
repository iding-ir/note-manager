import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import modalReducer from "./modal";
import notesReducer from "./notes";
import { googleAuth2Reducer } from "react-redux-google-auth2/dist/reducers/googleAuth2";

const combinedReducers = combineReducers({
  modal: modalReducer,
  form: formReducer,
  notes: notesReducer,
  googleAuth2: googleAuth2Reducer,
});

export default combinedReducers;
