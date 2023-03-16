import Contact from "./Contact";

const ContactList = (props) => {
  return (
    <ul>
      {props.items.map((usdetails) => (
        <Contact
          key={usdetails.name}
          name={usdetails.name}
          email={usdetails.email}
          number={usdetails.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;