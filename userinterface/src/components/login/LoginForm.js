import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      onLogin();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const backgroundImageStyle = {
    backgroundImage: 'url("mesh-gradient.png")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '100vh', 
  };

  const formStyle = {
    border: '3px solid black', 
    borderRadius: '8px', 
    padding: '2rem',
    textAlign: 'center',
  };

  return (
    <div className="card mb-3" style={{ ...backgroundImageStyle, padding: '12rem', textAlign: 'center', display:'flex', justifyContent:'center',alignItems:'center' }}>
    <div style={formStyle}>   
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}   className="form-control" required />
        </div>
        <div className='row'>
        <div className="col">
            <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
        <div className="col">
        <label className="form-label" style={{
                  color:"blue",
                }}>Forgot your password?</label>
        </div>  
        </div>
        <button className="btn btn-primary" type="submit" style={{
                  marginInline: "10px",
                }}>Login</button>

        <a href="/register">
          <button className="btn btn-danger" type="button" style={{
                  marginInline: "10px",
                }}>
            Signup
          </button>
          </a>         
      </form>
      </div>
    </div>
  );
};

export default LoginForm;