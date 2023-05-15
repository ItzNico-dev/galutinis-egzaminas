import React, { useState } from 'react';
import { createNewUser } from '../../api-calls';
import { FormContainer, FormGroup, Button } from './CreateUserForm.styled';

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
      window.location.reload();
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
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Your Name'
        />
      </FormGroup>
      <br />
      <FormGroup>
        Last Name:
        <input
          type='text'
          name='lastname'
          value={formData.lastname}
          onChange={handleChange}
          placeholder='Your Last name'
        />
      </FormGroup>
      <br />
      <FormGroup>
        Email:
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Your Email'
        />
      </FormGroup>
      <br />
      <FormGroup>
        Registration Date:
        <input
          type='date'
          name='registrationDate'
          value={formData.registrationDate}
          onChange={handleChange}
        />
      </FormGroup>
      <br />
      <FormGroup>
        Registration Time:
        <input
          type='time'
          name='registrationTime'
          value={formData.registrationTime}
          onChange={handleChange}
        />
      </FormGroup>
      <br />
      <Button type='submit'>Register</Button>
    </FormContainer>
  );
}
