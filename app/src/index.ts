import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { stream } from '../config/logger';

const app = express();

app.use(cors());
app.use(express.json());
app.disable('x-powered-by');
app.use(morgan('tiny', { stream }));

app.get('/', (req, res) => {
  res.json('The API is working fine! Don\'t worry');
});

export default app;
