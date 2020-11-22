import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("addContact/request");
const addContactSuccess = createAction("addContact/success");
const addContactError = createAction("addContact/error");

const getContactRequest = createAction("getContact/request");
const getContactSuccess = createAction("getContact/success");
const getContactError = createAction("getContact/error");

const deleteContactRequest = createAction("deleteContact/request");
const deleteContactSuccess = createAction("deleteContact/success");
const deleteContactError = createAction("deleteContact/error");

const filterContacts = createAction("phonebook/filterContacts");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,

  filterContacts
};