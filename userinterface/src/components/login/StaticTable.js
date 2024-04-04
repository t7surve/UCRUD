import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StaticTable = ({ onLogout }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User Information</h2>
      <button onClick={onLogout}>Logout</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Mobile no</th>
            <th>City</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData && (
            <tr>
              <td>{userData.name}</td>
              <td>{userData.dofb}</td>
              <td>{userData.mobileno}</td>
              <td>{userData.city}</td>
              <td>{userData.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StaticTable;