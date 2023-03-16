import React, { useState } from "react";

import ContactList from "./ContactList";
import Contactus from "./Contactus";
import Header from "./components/Layout/Header";
const ContactNavigation=()=>{
  const [contactDetails, setContactDetails] = useState([]);

  async function addDetailsHandler(contactDetail) {
   
        const response = await fetch('https://movies-fcc81-default-rtdb.firebaseio.com//movies.json', {
          method: 'POST',
          body: JSON.stringify(contactDetail),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
      
  };

  return (
    <div className="App">
      <Header />
      <Contactus onAddDetail={addDetailsHandler} />
      <ContactList items={contactDetails} />
    </div>
  );
}

export default ContactNavigation;