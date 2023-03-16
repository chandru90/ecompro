const Contact = (props) => {
    return (
      <li>
        <span>{props.name}</span>
        <span>{props.email}</span>
        <span>{props.number}</span>
      </li>
    );
  };
  
  export default Contact;