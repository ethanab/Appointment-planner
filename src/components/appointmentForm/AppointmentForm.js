import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label >Title</label>
      <input name="title" id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <label >Contact</label>
      <select name='contacts' id='select-contact' >
        {Object.values(contacts).map((element) => (
            <option key='name' value={element.name}>{element.name}</option>
        )
        )}
      </select>
      <label >Date</label>
      <input name="date" id="date" type="date" value={date} onChange={(e) =>setDate(e.target.value)} min={getTodayString()}/>
      <label >Time</label>
      <input name="time" id="time" type="time" value={time} onChange={(e) =>setTime(e.target.value)}/>
      <button type="submit" >Add New Appointment</button>
    </form>
    
    </>
  );
};
