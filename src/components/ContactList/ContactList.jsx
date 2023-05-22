import PropTypes from "prop-types";
import { List, Item } from "./ContactList.styled";
import { ContactItem } from "../ContactItem/ContactItem";

const ContactList = ({ contacts, onDelete}) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>

          <ContactItem contact={contact}
            onDeleteContact={onDelete}
          />
          
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })),
  onDelete: PropTypes.func.isRequired,
};

export { ContactList };