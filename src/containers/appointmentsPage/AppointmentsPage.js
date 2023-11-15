import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import App from "../../App";

export const AppointmentsPage = ({appointment, addAppointment, contacts}) => {
  /*
  Define state variables for 
  appointment info
  */

const[title, setTitle] = useState('');
const [time, setTime] = useState('');
const [date, setDate] = useState('');
const [contact, setContact] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);

    
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm  handleSubmit={handleSubmit} title={title} date={date} contact={contact} time={time} setContact={setContact} setDate={setDate} setTitle={setTitle} setTime={setTime} contacts={contacts}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tile={appointment}/>
      
      </section>
    </div>
  );
};