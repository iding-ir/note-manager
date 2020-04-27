import { NEW_OPEN, NEW_CLOSE } from "../constants";

export const openNewModal = () => {
  return {
    type: NEW_OPEN,
  };
};

export const closeNewModal = () => {
  return {
    type: NEW_CLOSE,
  };
};
