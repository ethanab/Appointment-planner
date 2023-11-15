import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([]);
 const [appointment, setAppointment] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
function addContact (name, phone, email){
console.log('you added '+name+' as a new contact');
  const newContact = {
    name:name,
    phone:phone,
    email:email,
  }; 

  setContacts(previous => {return [...previous, newContact]});
 }

 function addAppointment (title, contact, date, time){
  console.log('you added '+title+' as a new appointment');

  const newAppointment ={
    title:title,
    contact:contact,
    date:date,
    time:time,
  };
  setAppointment(prev => {return [...prev, newAppointment]});

 }




  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage addAppointment={addAppointment} appointment={appointment} contacts={contacts}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
