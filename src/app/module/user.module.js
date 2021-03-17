import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  // emial: {
  //   type: String,
  // },
  // password: {
  //   type: String,
  // },
});

export default mongoose.model('user', UserSchema);
