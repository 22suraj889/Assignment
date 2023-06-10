import { CHANGE_COUNTER } from "../Types/ActionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (counter = 0, action) => {
  switch (action.type) {
    case CHANGE_COUNTER:
      return counter + 1;
    default:
      return counter;
  }
};
