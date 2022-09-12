import {
  FormContact,
  Label,
  ErrorText,
  Input,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import { schemaFromLogin } from 'schema/schema';
import { LoginUser } from 'redux/authSlice';
import { useRedux } from 'hooks/useRedux';
import { Navigate } from 'react-router-dom';

const FormError = ({ name }) => (
  <ErrorMessage
    name={name}
    render={message => <ErrorText>{message}</ErrorText>}
  />
);

export const LoginForm = () => {
  const [dispatch] = useRedux();

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(LoginUser(user));
    <Navigate to="contacts" replace={true} />;
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={schemaFromLogin}
    >
      <FormContact>
        <Label>
          Email <Input type="email" name="email" />
          <FormError name="email" />
        </Label>

        <Label>
          Password <Input type="password" name="password" />
          <FormError name="password" />
        </Label>
        <Button type="submit">Login</Button>
      </FormContact>
    </Formik>
  );
};
