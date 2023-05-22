import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  font-size: 24px;
  line-height: 1.71;
  color: #6f4600;

`

const Input = styled.input`
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

export { Wrap, Label, Input}