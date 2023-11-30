import { combineReducers, legacy_createStore } from "redux"
import { todoReducer } from "./reducers/TodoReducer";
import { filterReducer } from "./reducers/FiltersReducer";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  filterReducer: filterReducer,
});

export const store = legacy_createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
