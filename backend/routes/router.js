import express from 'express';
const router = express.Router();
import { registerApointment } from '../controllers';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

router.get('/api/users');
router.get('/api/users/:id');

router.post('/api/user', registerApointment);

router.put('/api/users/:id');
router.delete('/api/users/:id');

export default router;

