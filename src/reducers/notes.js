import _ from "lodash";

import {
  NOTE_CREATE,
  NOTE_DELETE,
  NOTE_EDIT,
  NOTE_FETCH,
  NOTES_FETCH,
} from "../constants";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTE_CREATE:
    case NOTE_FETCH:
    case NOTE_EDIT:
      return { ...state, [action.payload.id]: action.payload };

    case NOTE_DELETE:
      return _.omit(state, action.payload);

    case NOTES_FETCH:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default reducer;
