import { combineReducers } from "redux";

import { tasksList } from "./tasksList";

//all reducers
export const rootReducers = combineReducers({
  tasksList,
});
