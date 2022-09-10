import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Notify } from 'notiflix';
import Contacts from 'components/Contacts/Contacts';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import Title from 'components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/actions';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) || []
  // );
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(store => store.contacts.items);
  const filter = useSelector(store => store.filter);

  const dispatch = useDispatch();

  const onSubmitAddToContacts = useCallback(
    (name, number, form) => {
      const sameName = contacts.find(contact => contact.name === name);
      if (sameName) {
        Notify.failure('This contact is already in your list');
        return form.reset();
      }

      const contact = {
        name,
        number,
      };

      dispatch(addContact(contact));
    },
    [contacts, dispatch]
  );

  const onInputChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const onClickDelete = idToDel => {
    dispatch(deleteContact(idToDel));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title title="Phonebook" />
      <ContactsForm onSubmit={onSubmitAddToContacts} />
      <Title title="Contacts" />
      <ContactsFilter onChange={onInputChange} filter={filter} />
      <Contacts
        onClick={onClickDelete}
        nameList={contacts?.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )}
      />
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 0 20px;
`;
