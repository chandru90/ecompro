import Header from "./components/Layout/Header";
import { useRef } from "react";

const Contactus = (props) => {
  const nameref = useRef("");
  const emailref = useRef("");
  const numberref = useRef("");

  const onformhandler = (event) => {
    event.preventDefault();
    const usdetails = {
      name: nameref.current.value,
      email: emailref.current.value,
      number: numberref.current.value,
    };
    props.onAddDetail(usdetails);
  };

  return (
    <>
      <form onSubmit={onformhandler}>
        <Header />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameref} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailref} />

        <label htmlFor="number">Number:</label>
        <input type="number" id="number" ref={numberref} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contactus;