import express from 'express';
const router = express.Router();
import {
  createNewUser,
  getAllUsers,
  updateUserById,
  deleteUserById,
} from '../controllers/index.js';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

router.get('/api/users', getAllUsers);

router.post('/api/user', createNewUser);
router.put('/api/users/:id', updateUserById);
router.delete('/api/users/:id', deleteUserById);

export default router;

