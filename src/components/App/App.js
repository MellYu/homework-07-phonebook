import React, { Component } from "react";
import Section from "../Header/Section.js";
import ContactForm from "../ContactsForm/ContactsForm.js";
import ContactList from "../ContactsList/ContactsList.js";
import Filter from "../Filter/Filter.js";
import { connect } from "react-redux";
import contactsOperations from './../../redux/phonebook/phonebookOperations';
import styles from "./main.module.css";

class App extends Component{
  componentDidMount(){
    this.props.onFetchContacts();
   
  }

  render(){
    const {contacts} = this.props.phonebook;
    return (<div className={styles.container}>
         <Section title="Phonebook" />
        <ContactForm />
         {contacts.length > 1 && <Filter/>}
         <h2 className={styles.contactsTitle}>Contacts</h2>
         {contacts.length ?
          <ContactList /> : (<p>There is no contacts</p>)}
       </div>)
  }
}

const mapStateToProps = (state) =>{
  return state;
}

const mapDispatchToProps ={
  onFetchContacts: contactsOperations.getContact
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
