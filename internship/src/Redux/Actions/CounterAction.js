import { CHANGE_COUNTER } from "../Types/ActionTypes";

export const changeCounter = () => {
  return {
    type: CHANGE_COUNTER,
    payload: null,
  };
};
