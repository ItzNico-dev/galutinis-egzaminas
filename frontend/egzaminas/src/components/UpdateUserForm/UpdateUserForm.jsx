import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function UpdateUserForm({
  formData,
  handleUpdate,
  handleClose,
}) {
  const [name, setName] = useState(formData.name);
  const [lastname, setLastname] = useState(formData.lastname);
  const [email, setEmail] = useState(formData.email);
  const [registrationDate, setRegistrationDate] = useState(
    moment(formData.registrationDate).format('YYYY-MM-DD')
  );
  const [registrationTime, setRegistrationTime] = useState(
    formData.registrationTime
  );

  useEffect(() => {
    setName(formData.name);
    setLastname(formData.lastname);
    setEmail(formData.email);
    setRegistrationDate(moment(formData.registrationDate).format('YYYY-MM-DD'));
    setRegistrationTime(formData.registrationTime);
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, lastname, email, registrationDate, registrationTime };
    await handleUpdate(formData.userId, data);
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='lastname'>Lastname:</label>
            <input
              type='text'
              id='lastname'
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='registration-date'>Registration Date:</label>
            <input
              type='date'
              id='registration-date'
              value={registrationDate}
              onChange={(event) => setRegistrationDate(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='registration-time'>Registration Time:</label>
            <input
              type='time'
              id='registration-time'
              value={registrationTime}
              onChange={(event) => setRegistrationTime(event.target.value)}
              required
            />
          </div>
          <div className='buttons'>
            <button type='submit'>Update</button>
            <button type='button' onClick={handleClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
