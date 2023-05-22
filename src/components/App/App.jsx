import { useState, useEffect } from "react";
import { PhonebookSection } from "../PhonebookSection/PhonebookSection";
import { Form } from "../ContactForm/ContactForm";
import { PhonebookFilter } from "../PhonebookFilter/PhonebookFilter";
import { ContactList } from "../ContactList/ContactList";
import { nanoid } from "nanoid";




const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (values, { resetForm }) => {
    
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    contacts.find(contact => contact.name.toUpperCase() === newContact.name.toUpperCase())
      ? window.alert(`${newContact.name} is already in contacts`)
      : setContacts([newContact, ...contacts]);
   
    resetForm();
  }

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toUpperCase();
    return contacts.filter(contact => contact.name.toUpperCase().includes(normalizedFilter))
  }
  const visibleContacts = getVisibleContacts();
  
  return (
    <>
      <PhonebookSection title="Phonebook">
        <Form onSubmit={addContact} /> 
      </PhonebookSection>

      <PhonebookSection title="Contacts">
        <PhonebookFilter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={deleteContact}
        />
      </PhonebookSection>
    </>
  );
};

export { App };