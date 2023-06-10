import { ADD_USER_MSG, FETCH_MSG } from "../Types/ActionTypes";

const msg = [
  {
    bot: "Hello, welcome to student info system!",
    button: "Got it",
    user: "",
  },
  {
    bot: "Enter your name",
    button: "",
    user: "",
  },
  {
    bot: "Enter your age",
    button: "",
    user: "",
  },
  {
    bot: "Thank you",
    button: "",
    user: "",
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
    default:
      return message;
  }
};
