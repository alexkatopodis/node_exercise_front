import { combineReducers } from "redux";
import usersReducer from "./users/reducer";
import messagesReducer from './messages/reducer'

const rootReducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
});

export default rootReducer;
