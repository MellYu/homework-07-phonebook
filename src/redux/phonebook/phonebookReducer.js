import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import contactsActions from "./phonebookActions";

const onAddContact = (state, action) => [...state, action.payload];

const onDeleteContact = (state, action) => state.filter((contact) =>
   contact.id !== action.payload );

const onGetContacts =  (state, action) => action.payload;
const onFilterContacts = (state, action) => action.payload;


const contacts = createReducer([], {
  [contactsActions.getContactSuccess]:onGetContacts,
  [contactsActions.addContactSuccess]: onAddContact,
  [contactsActions.deleteContactSuccess]: onDeleteContact,
});

const filter = createReducer("", {
  [contactsActions.filterContacts]: onFilterContacts,
});

export default combineReducers({
  contacts,
  filter,
});
