import {
  FormContact,
  Label,
  ErrorText,
  Input,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import { schemaFromLogin } from 'schema/schema';

const FormError = ({ name }) => (
  <ErrorMessage
    name={name}
    render={message => <ErrorText>{message}</ErrorText>}
  />
);

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {};
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
