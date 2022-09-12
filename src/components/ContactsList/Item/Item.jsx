import { Item, Text, Button } from './Item.styled';
import { useEffect } from 'react';
import { useRedux } from 'hooks/useRedux';
import {
  getContacts,
  getFilterValue,
  getAllContacts,
  deleteContact,
} from 'redux/contactsSlice';

export const ContactItem = () => {
  const [dispatch, useSelector] = useRedux();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {filteredContacts?.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name} : {number}
          </Text>
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </Item>
      ))}
    </>
  );
};
