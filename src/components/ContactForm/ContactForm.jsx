import { Formik, ErrorMessage } from 'formik';
import { schemaFromContacts } from 'schema/schema';
import { getContacts, addNewContact } from 'redux/contactsSlice';
import { Notify } from 'notiflix';
import {
  FormContact,
  Label,
  Input,
  Button,
  ErrorText,
  Name,
} from './ContactForm.styled';
import { useRedux } from 'hooks/useRedux';

const FormError = ({ name }) => (
  <ErrorMessage
    name={name}
    render={message => <ErrorText>{message}</ErrorText>}
  />
);

export const ContactForm = () => {
  const [dispatch, useSelector] = useRedux();
  const contacts = useSelector(getContacts);

  const isContact = data => {
    const result = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    return result;
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = {
      name,
      number,
    };
    if (isContact(contact)) {
      Notify.failure(`${contact.name} already added`);
      return;
    } else {
      dispatch(addNewContact(contact));
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schemaFromContacts}
    >
      <FormContact>
        <Label>
          <Name>Name</Name>
          <Input type="text" name="name" placeholder="Martin" />
          <FormError name="name" />
        </Label>
        <Label>
          <Name>Number</Name>
          <Input type="tel" name="number" placeholder="+380 (67) 425-99-75" />
          <FormError name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContact>
    </Formik>
  );
};
