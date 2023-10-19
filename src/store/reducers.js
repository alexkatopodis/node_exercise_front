import { combineReducers } from "redux";
// import Layout from "./layout/reducer";
import usersReducer from "./users/reducer";

const rootReducer = combineReducers({
  // layout: Layout,
  users: usersReducer,
});

export default rootReducer;
