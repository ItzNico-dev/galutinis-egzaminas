import React, { useState, useEffect } from 'react';
import {
  getAllUsers,
  updateUserById,
  deleteUserById,
  createNewUser,
} from '../../api-calls';
import { TableContainer } from './Table.styled';

import UpdateUserForm from '../UpdateUserForm/UpdateUserForm';
import CreateUserForm from '../CreateUserForm/CreateUserForm';

export default function Table() {
  const [users, setUsers] = useState([]);
  const [updateFormData, setUpdateFormData] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllUsers();
      console.log(res);
      setUsers(res);
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteUserById(userId);
      setUsers(users.filter((user) => user.userId !== userId));
    } catch (error) {
      console.log(error);
      alert('User deletion failed!');
    }
  };

  const handleUpdate = async (userId, data) => {
    await updateUserById(userId, data);
    const res = await getAllUsers();
    setUsers(res);
    setShowUpdateForm(false);
    setUpdateFormData(null);
    if (res.status === 'success') {
      alert('User Updated!');
    }
  };

  return (
    <TableContainer>
      <h1>Users</h1>

      <button onClick={() => setShowCreateForm(true)}>Create User</button>
      {showCreateForm && (
        <CreateUserForm
          createNewUser={createNewUser}
          handleClose={() => setShowCreateForm(false)}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Registration Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>
                {new Date(user.registrationDate).toLocaleDateString('LT-lt')}
              </td>
              <td>{user.registrationTime}</td>

              <td>
                <button onClick={() => handleDelete(user.userId)}>
                  Delete
                </button>
                <button
                  onClick={() => {
                    setUpdateFormData(user);
                    setShowUpdateForm(true);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showUpdateForm && (
        <UpdateUserForm
          formData={updateFormData}
          handleUpdate={handleUpdate}
          handleClose={() => setShowUpdateForm(false)}
        />
      )}
    </TableContainer>
  );
}
