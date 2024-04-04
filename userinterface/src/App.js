import './App.css';
import React,{useState} from 'react';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm';
import StaticTable from './components/login/StaticTable';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/"
          element={ loggedIn ? <Navigate to="/table" /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
            path="/table"
            element={
              loggedIn ? <StaticTable onLogout={handleLogout} /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

