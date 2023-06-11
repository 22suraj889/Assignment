import { ADD_USER_MSG, FETCH_MSG, CLEAR_USER_MSG } from "../Types/ActionTypes";

const msg = [
  {
    bot: "Hello, welcome to student info system!",
    btn: "Got it",
    user: null,
  },
  {
    bot: "Enter your name",
    btn: null,
    user: null,
  },
  {
    bot: "Enter your age",
    btn: null,
    user: null,
  },
  {
    bot: "Thank you",
    btn: null,
    user: null,
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (message = msg, action) => {
  switch (action.type) {
    case FETCH_MSG:
      return message;
    case ADD_USER_MSG:
      message[action.payload.index].user = action.payload.userMsg;
      return message;
    case CLEAR_USER_MSG:
      message = msg;
      return message;
    default:
      return message;
  }
};
