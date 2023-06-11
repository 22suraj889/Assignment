import { CHANGE_COUNTER, RESET_COUNTER } from "../Types/ActionTypes";

export const changeCounter = () => {
  return {
    type: CHANGE_COUNTER,
    payload: null,
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER,
    payload: null,
  };
};
