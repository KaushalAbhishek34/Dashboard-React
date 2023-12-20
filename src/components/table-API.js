import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const records = await fetch('https://fakestoreapi.com/users');
      const data = await records.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Table striped bordered hover variant="success">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Password</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody id="tbody">
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name.firstname}</td>
            <td>{user.name.lastname}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
