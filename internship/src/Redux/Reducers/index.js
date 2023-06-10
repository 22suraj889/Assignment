import { combineReducers } from "redux";
import TypingReducer from "./ChangeCounterReducer";
import MessageReducer from "./MessageReducer";
export default combineReducers({
  typing: TypingReducer,
  allChat: MessageReducer,
});
