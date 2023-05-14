import User from '../models/userModel.js';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

export async function registerApointment(req, res) {
  try {
    const { name, lastname, email, registrationDate, registrationTime } =
      req.body;
    const newUser = {
      name,
      lastname,
      email,
      registrationDate,
      registrationTime,
    };
    const user = await User.create(newUser);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function getAllUsers(req, res) {
  try {
    const mongoUsers = await User.find({}, { __v: false });
    const response = await fetch(MONGO_URI + '/api/users');
    const data = await response.json();

    const serialisedUsers = mongoUsers.map((user) => {
      return {
        userId: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        registrationDate: user.registrationDate,
        registrationTime: user.registrationTime,
      };
    });
    const mergedUsers = [...serialisedUsers, ...data];
    res.json(mergedUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const response = await fetch(MONGO_URI + `/api/user/${id}`);
    const data = await response.json();
    const serialisedUser = {
      userId: data.userId,
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      registrationDate: data.registrationDate,
      registrationTime: data.registrationTime,
    };
    res.json(serialisedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function deleteUserById(req, res) {
  try {
    const { id } = req.params;
    const deleteRes = await User.findByIdAndDelete(id);
    res.json(deleteRes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function updateUserById(req, res) {
  try {
    const { id } = req.params;
    const updateRes = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateRes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
