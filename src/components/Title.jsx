import React, { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", form);
      alert("Registered! Token: " + res.data.token);
    } catch (err) {
      alert("Error: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstname" placeholder="First Name" onChange={handleChange} /><br />
      <input name="lastname" placeholder="Last Name" onChange={handleChange} /><br />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
