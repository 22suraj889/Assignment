import { combineReducers } from "redux";
import CounterReducer from "./ChangeCounterReducer";
import MessageReducer from "./MessageReducer";
const appReducer = combineReducers({
  counter: CounterReducer,
  allChat: MessageReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_EXIT") {
    const { routing } = state;
    state = { routing };
  }
  return appReducer(state, action);
};
export default rootReducer;
