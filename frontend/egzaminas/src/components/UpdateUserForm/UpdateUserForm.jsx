import React, { useState, useEffect } from 'react';
import moment from 'moment';

import {
  Modal,
  ModalContent,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Buttons,
  SubmitButton,
  CloseButton,
} from './UpdateUserForm.styled';

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
    <Modal>
      <ModalContent>
        <Title>Update User</Title>
        <Form>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type='text'
              id='name'
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='lastname'>Lastname:</Label>
            <Input
              type='text'
              id='lastname'
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='email'>Email:</Label>
            <Input
              type='email'
              id='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='registration-date'>Registration Date:</Label>
            <Input
              type='date'
              id='registration-date'
              value={registrationDate}
              onChange={(event) => setRegistrationDate(event.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='registration-time'>Registration Time:</Label>
            <Input
              type='time'
              id='registration-time'
              value={registrationTime}
              onChange={(event) => setRegistrationTime(event.target.value)}
              required
            />
          </FormGroup>
          <Buttons className='buttons'>
            <SubmitButton type='submit' onClick={handleSubmit}>
              Update
            </SubmitButton>
            <CloseButton type='button' onClick={handleClose}>
              Close
            </CloseButton>
          </Buttons>
        </Form>
      </ModalContent>
    </Modal>
  );
}
