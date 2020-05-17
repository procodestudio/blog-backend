import mongoose from 'mongoose';

const dbOptions: object = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
};

const databaseUrl: string = process.env.DB_URL || '';

mongoose.connect(databaseUrl, dbOptions);

export default mongoose;
