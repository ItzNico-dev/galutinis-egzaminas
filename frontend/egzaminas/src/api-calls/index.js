import axios from 'axios';
const HOST = 'https://localhost:4000/api';

export async function createNewUser(body) {
  try {
    const res = await axios.post(`${HOST}/user`, body);

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUsers() {
  try {
    const users = await axios.get(`${HOST}/users`);
    return users.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUserById(userId, data) {
  try {
    const user = await axios.put(`${HOST}/user/${userId}`, data);
    return user.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUserById(userId) {
  try {
    const res = await axios.delete(`${HOST}/user/${userId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}
