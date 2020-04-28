import { MODAL_OPEN, MODAL_CLOSE } from "../constants";

const INITIAL_STATE = {
  visible: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return { ...state, visible: true };

    case MODAL_CLOSE:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export default reducer;
