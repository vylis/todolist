import { createStore } from "redux";

import { rootReducers } from "./reducers/index";

//store

export const store = createStore(rootReducers);
