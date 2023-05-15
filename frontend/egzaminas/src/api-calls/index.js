import axios from 'axios';


const HOST = 'http://localhost:4000/api';

export async function createNewUser(body) {
  try {
    const res = await axios.post(`${HOST}/users`, body);
    return res.data;
  } catch (error) {
    console.error(error.response);
    throw new Error('Failed to create a new user. Please try again later.');
  }
}

export async function getAllUsers() {
  try {
    const res = await axios.get(`${HOST}/users`);
    return res.data || [];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch users. Please try again later.');
  }
}

export async function updateUserById(userId, data) {
  try {
    const res = await axios.put(`${HOST}/users/${userId}`, data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update the user. Please try again later.');
  }
}

export async function deleteUserById(userId) {
  try {
    const res = await axios.delete(`${HOST}/users/${userId}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete the user. Please try again later.');
  }
}
