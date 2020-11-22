

const visibleContacts = (state) =>{
    const visible = state.phonebook.contacts.filter(resp => 
        resp.contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())
        )
      return{
        contacts: visible,
      }
}

export default {
    visibleContacts,
}