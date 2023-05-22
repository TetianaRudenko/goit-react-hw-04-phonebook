import styled from "styled-components";

const ContactInfo = styled.span`
  font-size: 24px;
  line-height: 1.3;
  color: #083f00;
`

const Button = styled.button`
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #64f38c9c;
  border-radius: 73% 27% 92% 8% / 42% 70% 30% 58% ;
  background: linear-gradient(to right, rgb(247, 157, 0), rgb(100, 243, 140));
  color: #6f4600;

  &:hover,
  &:focus {
    background: #6f4600;
    color: #64f38c9c;
    box-shadow: 10px 10px 28px -12px rgba(8,63,0,0.75);
  }
`

export { ContactInfo, Button };