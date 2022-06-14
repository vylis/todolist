import { combineReducers } from "redux";

//import
import { tasksList } from "./taskReducer";

//all reducers
export const rootReducers = combineReducers({
  tasksList,
});
