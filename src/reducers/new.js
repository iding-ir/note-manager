import { NEW_OPEN, NEW_CLOSE } from "../constants";

const INITIAL_STATE = {
  visible: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_OPEN:
      return { ...state, visible: true };

    case NEW_CLOSE:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export default reducer;
