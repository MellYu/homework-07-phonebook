import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "./phonebook/phonebookReducer";

const rootReduser = combineReducers({
  phonebook: phoneReducer,
});

const store = configureStore({
  reducer: rootReduser,
});
export default store;
