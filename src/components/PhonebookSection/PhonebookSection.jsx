import PropTypes from "prop-types";
import { Section, Title } from "./PhonebookSection.styled";

const PhonebookSection = ({ title, children }) => {
  return (
    <Section>
      {title && <Title> {title} </Title>}
      {children}
    </Section>
  )
}

PhonebookSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export { PhonebookSection };