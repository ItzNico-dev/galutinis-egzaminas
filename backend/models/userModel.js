import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    // required: true,
  },
  registrationTime: {
    type: String,
    // required: true,
  },
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
