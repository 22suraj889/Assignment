import { ADD_USER_MSG, CLEAR_USER_MSG, FETCH_MSG } from "../Types/ActionTypes";

export const fetchMessage = () => {
  return {
    type: FETCH_MSG,
    payload: null,
  };
};

export const addUserMessage = (userMsg, index) => {
  return {
    type: ADD_USER_MSG,
    payload: { userMsg, index },
  };
};

export const clearUserMessage = () => {
  return {
    type: CLEAR_USER_MSG,
    payload: null,
  };
};
