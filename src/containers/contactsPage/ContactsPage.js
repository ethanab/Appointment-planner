import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] =useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [isDuplicate, setIsDuplicate]= useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDuplicate !== true){
    addContact(name, phone, email);
   
    } else {
      console.log('name already exists')
    }
  
    console.log({contacts});
   
   }
  
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

   useEffect(() => {
    const found = contacts.find(contact => contact.name === name)

    if (found === undefined){
      setIsDuplicate(false)
    }else {
      setIsDuplicate(true)
    } 
  }, [name, contacts])
    
 

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <ContactForm handleSubmit={handleSubmit} name={name} phone={phone} email={email} setName={setName} setEmail={setEmail} setPhone={setPhone}/>
      <hr />
      
      <section>
        <h2>Contacts</h2>
        <ContactPicker contacts={contacts} />
      </section>
    </div>
  );
};
