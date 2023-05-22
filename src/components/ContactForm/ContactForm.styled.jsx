import styled from "styled-components";
import { Form, Field } from "formik";


const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`

const Label = styled.label`
  margin-right: 10px;
  font-size: 24px;
  line-height: 1.71;
  color: #6f4600;
`

const Input = styled(Field)`
  width: 200px;
  height: 30px;
  padding: 10px 10px 10px 18px;
  border-radius: 90% 10% 89% 11% / 12% 100% 0% 88% ;
  border: 1px solid #6f4600;

  color: #6f4600;
  font-size:16px;
  outline: 0;

  &:focus {
    border: 2px solid #6f4600;
    box-shadow: 24px 17px 39px -9px rgba(0,0,0,0.75);
  }
`

const ErrorText = styled.p`
  color: #ff8400;
  font-size: 16px;
`

const Button = styled.button`
  display: inline;
  width: 230px;
  height: 50px;
  padding: 10px 10px 10px 18px;
  border-radius: 90% 10% 89% 11% / 12% 100% 0% 88% ;
  background: linear-gradient(to right, rgb(247, 157, 0), rgb(100, 243, 140));
  border: 1px solid #64f38c9c;

  color: #6f4600;

  cursor: pointer;
  font-size: 18px;

  &:hover,
  &:focus {
    border: 2px solid #6f4600;
    box-shadow: 24px 17px 39px -9px rgba(0,0,0,0.75);
  }
`

export { ContactForm, Label, Input, ErrorText, Button };