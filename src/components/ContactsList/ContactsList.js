import React from "react";
import { connect } from "react-redux";
import contactActions from "./../../redux/phonebook/phonebookActions";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import phonebookSelectors from './../../redux/phonebook/phonebookSelectors';
import animation from "./animation.module.css";
import styles from "./list.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts.contacts.map((contact) => 
      (
        <CSSTransition
          key={contact.id}
          classNames={animation}
          timeout={250}
          unmountOnExit
        >
          <li className={styles.contactListItem}>
            <span className={styles.name}>{contact.contact.name}</span>
            <span className={styles.number}>{contact.contact.number}</span>
            <button
              className={styles.closeBtn}
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              &#215;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};


const mapStateToProps = (state) => {
  return{
    contacts: phonebookSelectors.visibleContacts(state),
  }
};

const mapDispatchToProps = {
  onDelete: contactActions.deleteContactSuccess,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);