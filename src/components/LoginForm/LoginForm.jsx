import { Formik, ErrorMessage } from 'formik';
import { useRedux } from 'hooks/useRedux';
import { Navigate } from 'react-router';
import {
  FormContact,
  Label,
  ErrorText,
  Input,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { schemaFromLogin } from 'schema/schema';
import { loginUser } from 'redux/authSlice';

const FormError = ({ name }) => (
  <ErrorMessage
    name={name}
    render={message => <ErrorText>{message}</ErrorText>}
  />
);

export const LoginForm = () => {
  const [dispatch] = useRedux();

  const handleSubmit = values => {
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(user));
    // <Redirect to="/contacts" />;
    <Navigate to="contacts" replace />;
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={schemaFromLogin}
    >
      {props => (
        <FormContact>
          <Label>
            Email{' '}
            <Input
              type="email"
              name="email"
              onChange={props.handleChange}
              value={props.values.email}
            />
            <FormError name="email" />
          </Label>

          <Label>
            Password{' '}
            <Input
              type="password"
              name="password"
              onChange={props.handleChange}
              value={props.values.password}
            />
            <FormError name="password" />
          </Label>
          <Button type="submit">Login</Button>
        </FormContact>
      )}
    </Formik>
  );
};
