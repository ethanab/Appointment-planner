import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (

    <>
    <form onSubmit={handleSubmit}>
      <label >Name</label>
      <input name="name" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <label >Phone</label>
      <input name="phone" id="phone" type="tel" value={phone} onChange={(e) =>setPhone(e.target.value)}/>
      <label >Email</label>
      <input name="email" id="email" type="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
      <button type="submit" >Add New Contact</button>

    </form>
    
    
    
    
    </>
  );
};

