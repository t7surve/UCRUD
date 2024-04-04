import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {

    const [formData, setFormData] = useState({
       name:"",
       dofb:"",
       mobileno:"",
       city:"",
       email:"",
       password:""

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData)
      .then((response) => {
        alert(" User Data Registered Successfully");
        window.location.href = '/login';
      })
    } catch (error) {
      console.error(error);
    }
  };


  const backgroundImageStyle = {
    backgroundImage: 'url("mesh-gradient.png")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '100vh', 
  };

  


  return (
    <div className="card mb-3" style={{
        ...backgroundImageStyle,
        padding: "12rem",
      }}>    
      <form onSubmit={handleSubmit} className="p-3 mb-2 bg-primary-subtle text-emphasis-success">
      <h2>Signup</h2>
      <div className="row">
        <div className="col">
          <label className="form-label">Name:</label>
          <input type="text" value={formData.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col">
          <label className="form-label">Date of Birth:</label>
          <input type="date" value={formData.dofb} onChange={handleChange} className="form-control" required />
        </div>
        </div>
        <div className="row">
        <div className="col">
          <label className="form-label">Mobile no:</label>
          <input type="number" value={formData.mobileno} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col">
          <label className="form-label">City:</label>
          <input type="text" value={formData.city} onChange={handleChange} className="form-control" required />
        </div>
        </div>
        <div className="row">
        <div className="col">
          <label className="form-label">Email:</label>
          <input type="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col">
          <label className="form-label">Password:</label>
          <input type="password" value={formData.password} onChange={handleChange} className="form-control" required />
        </div>
        </div>
        <br></br>
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}
            style={{
              marginInline: "10px",
            }} 
            >Register
        </button>
        </form>
      </div>
  );
};

export default RegisterForm;