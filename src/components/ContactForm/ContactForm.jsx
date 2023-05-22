import PropTypes from 'prop-types';     
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ContactForm, Label, Input, Button, ErrorText } from "./ContactForm.styled";   


const Form = ({ onSubmit }) => {

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const patternName =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const patternNumber =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  
  const schema = yup.object().shape({
    name: yup.string()
      .min(2, 'Too Short!')
      .max(18, 'Name too long!')
      .matches(
        patternName,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Required'),
    number: yup.string()
      .matches(
        patternNumber,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Required'),
  });

  const FormError = ({ name }) => {
    return(
        <ErrorMessage
            name={name}
            render={message => <ErrorText>{message}</ErrorText>}
        />
    )
};

  return (
    <Formik
      initialValues={{ name: '', number: '',}}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <ContactForm  autoComplete="on">
        <Label  htmlFor={nameInputId}>
          Name
        </Label>
        <Input
          type="text"
          name="name"
          id={nameInputId}
          /* title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required */
        />
        <FormError
          name="name"
          render={msg => < ErrorText>{msg}</ ErrorText>}
        />
        <Label  htmlFor={numberInputId}>
          Number
        </Label>
        <Input
          type="tel"
          name="number"
          id={numberInputId}
          /* title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required */
        />
        <FormError
          name="number"
          render={msg => <ErrorText >{msg}</ErrorText>}
        />
        < Button type="submit">
          Add contact
        </Button >
      </ContactForm>
    </Formik>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Form }