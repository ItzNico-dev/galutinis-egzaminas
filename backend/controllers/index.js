import User from '../models/userModel';
import dotenv from 'dotenv';
dotenv.config();

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
    res.status(500).json(error.message);
  }
}

export async function getAllUsers(req, res) {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const deleteRes = await User.findByIdAndDelete(id);

    res.json(deleteRes);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
}

export async function updateUserById(req, res) {
  try {
    const updateRes = await User.findOneAndUpdate(req.params.id, req.body);
    res.json(updateRes);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
}
