import express from 'express';
const router = express.Router();
import { registerApointment, getAllUsers, updateUserById, deleteUserById, getUserById } from '../controllers';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

router.get('/api/users', getAllUsers);
router.get('/api/users/:id', getUserById);

router.post('/api/user', registerApointment);
router.put('/api/users/:id', updateUserById);
router.delete('/api/users/:id', deleteUserById);

export default router;

