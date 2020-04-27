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
      return { ...state, [action.payload]: undefined };

    case NOTES_FETCH:
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducer;
