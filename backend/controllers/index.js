import User from '../models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

export async function createNewUser(req, res) {
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
    res.json(serialisedUsers);
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
