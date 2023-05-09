import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/router.js';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Main',
  })
  .then(() => {
    console.log('Connected to the Database.');
  })
  .catch((err) => console.error(err));

app.listen(PORT, console.log(`server is listening on port: ${PORT}`));
