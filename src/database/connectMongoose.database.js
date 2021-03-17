import 'dotenv/config';
import Mongoose from 'mongoose';

class Database {
  constructor() {}
  init() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = Mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
