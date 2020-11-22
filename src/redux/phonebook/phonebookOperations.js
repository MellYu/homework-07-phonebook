import axios from "axios";
import contactsActions from "./phonebookActions";

axios.defaults.baseURL = 'http://localhost:2000' 

const addContact = (contact) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", { contact })
    .then((response) =>
      dispatch(contactsActions.addContactSuccess(response.data))
    )
    .catch((error) => contactsActions.addContactError(error));
};

const getContact = () => (dispatch) => {
  dispatch(contactsActions.getContactRequest());

  axios
    .get("/contacts")
    .then((response) =>
      dispatch(contactsActions.getContactSuccess(response.data))
    ).catch(error => dispatch(contactsActions.getContactError(error)));
};

const deleteContact = (id) => dispatch =>{
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch(error => dispatch(contactsActions.deleteContactError(error)));
}

export default {
  addContact,
  getContact,
  deleteContact,
};
