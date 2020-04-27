import { NEW_OPEN, NEW_CLOSE } from "../constants";

export const openNew = () => {
  return {
    type: NEW_OPEN,
  };
};

export const closeNew = () => {
  return {
    type: NEW_CLOSE,
  };
};
