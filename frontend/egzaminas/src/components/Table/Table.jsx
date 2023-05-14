import React, { useState, useEffect } from 'react';
import {
  getAllUsers,
  updateUserById,
  deleteUserById,
  createNewUser,
} from '../../api-calls';
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
      console.log('res:', res); // add this line
      setUsers(res.data);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteUserById(id);
    const res = await getAllUsers();
    setUsers(res.data);
    if (res.data.status === 'success') {
      alert('User Deleted!');
    }
  };

  const handleUpdate = async (id, data) => {
    await updateUserById(id, data);
    const res = await getAllUsers();
    setUsers(res.data);
    setShowUpdateForm(false);
    setUpdateFormData(null);
    if (res.data.status === 'success') {
      alert('User Updated!');
    }
  };

  return (
    <div>
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
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.registrationDate}</td>
              <td>{user.registrationTime}</td>
              <td>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
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
    </div>
  );
}