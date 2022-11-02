import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import FormContacts from './FormContacts/FormContacts';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

export default function App() {

  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem("contacts"));
    return value ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const isDublicate = ({name, number}) => {
      const result = contacts.find(item => item.name === name
      || item.number === number);
    return result;
    
  };

  const addContact = contact => {
    if (isDublicate(contact)) {
      alert('this name or number is already added to contacts');
      return;
    };
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    setContacts(prev => [...prev, newContact]);
  };

  const removeContact = id => {
    setContacts(prev => {
      const newContacts = prev.filter(item => item.id !== id);
      return newContacts;
    });
  };

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const  getFilteredContacts = () => {

    if (!filter) {
      return contacts;
    };

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter);
      return result;
    });

    return filteredContacts;
  };

  const filterContacts = getFilteredContacts();

  return (
    <div>
      <FormContacts addContact={addContact} />
      <Filter filter={filter} onChange={handleChange} />
      {contacts.length > 0 ? <ContactsList contacts={filterContacts} removeContact={removeContact} /> : null}
    </div>
  );
}

