import styled from "styled-components";

const List = styled.ul`
  margin-left: 20px;
  padding: 8px;

`

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

export { List, Item };