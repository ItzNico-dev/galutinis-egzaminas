import React, { useState } from 'react';
import { createNewUser } from '../../api-calls';

export default function CreateUserForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    registrationDate: '',
    registrationTime: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNewUser(formData);
      alert('User created successfully!');
      setFormData({
        name: '',
        lastname: '',
        email: '',
        registrationDate: '',
        registrationTime: '',
      });
    } catch (error) {
      console.error(error.message);
      alert('Failed to create a new user. Please try again later.');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type='text'
          name='lastname'
          value={formData.lastname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Registration Date:
        <input
          type='date'
          name='registrationDate'
          value={formData.registrationDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Registration Time:
        <input
          type='time'
          name='registrationTime'
          value={formData.registrationTime}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type='submit'>Register</button>
    </form>
  );
}
