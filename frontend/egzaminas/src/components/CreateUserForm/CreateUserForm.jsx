import React, { useState } from 'react';

export default function CreateUserForm(props) {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [registrationTime, setRegistrationTime] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      lastname,
      email,
      registrationDate,
      registrationTime,
    };
    await props.createNewUser(data);
    setName('');
    setLastname('');
    setEmail('');
    setRegistrationDate('');
    setRegistrationTime('');
    props.handleClose();
  };

  return (
    <div>
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
          <label htmlFor='registrationDate'>Registration Date:</label>
          <input
            type='date'
            id='registrationDate'
            value={registrationDate}
            onChange={(event) => setRegistrationDate(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor='registrationTime'>Registration Time:</label>
          <input
            type='time'
            id='registrationTime'
            value={registrationTime}
            onChange={(event) => setRegistrationTime(event.target.value)}
            required
          />
        </div>

        <button type='submit'>Create</button>
      </form>
    </div>
  );
}
