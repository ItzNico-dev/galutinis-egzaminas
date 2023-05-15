import express from 'express';
const router = express.Router();
import {
  createNewUser,
  getAllUsers,
  updateUserById,
  deleteUserById,
} from '../controllers/index.js';


router.get('/api/users', getAllUsers);

router.post('/api/users', createNewUser);
router.put('/api/users/:id', updateUserById);
router.delete('/api/users/:id', deleteUserById);

export default router;

