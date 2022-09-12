import {
  FormContact,
  Label,
  ErrorText,
  Input,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import { schemaFromSignUp } from 'schema/schema';
import { useRedux } from 'hooks/useRedux';
import { authUser } from 'redux/authSlice';
import { Navigate } from 'react-router-dom';

const FormError = ({ name }) => (
  <ErrorMessage
    name={name}
    render={message => <ErrorText>{message}</ErrorText>}
  />
);

export const SignUpp = () => {
  const [dispatch] = useRedux();

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(authUser(user));
    <Navigate to="contacts" replace={true} />;
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={schemaFromSignUp}
    >
      <FormContact>
        <Label>
          Name <Input type="name" name="name" />
          <FormError name="name" />
        </Label>

        <Label>
          Email <Input type="email" name="email" />
          <FormError name="email" />
        </Label>

        <Label>
          Password <Input type="password" name="password" />
          <FormError name="password" />
        </Label>
        <Button type="submit">SignUp</Button>
      </FormContact>
    </Formik>
  );
};
