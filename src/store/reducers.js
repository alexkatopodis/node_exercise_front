import { combineReducers } from "redux";
import usersReducer from "./users/reducer";
import messagesReducer from './messages/reducer'
import bulkReducer from './bulk/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
  bulk: bulkReducer
});

export default rootReducer;
