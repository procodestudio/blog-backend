import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send('Let\'s start our sample blog projectt');
});

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
