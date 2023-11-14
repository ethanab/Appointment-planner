import React from "react";
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";

export const ContactPicker = ({contacts}) => {




  return (
    <>
    <div>
      { Object.entries(contacts).map( (e,i) => {
        console.log('e: '+e);
        return(
        <p>Name: {e[i][1]}</p>)
      })}
    </div>
    
    
    
    </>
  );
};
