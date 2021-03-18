import mongoose from 'mongoose';

const HistorySchena = new mongoose.Schema({
  module: String,
  route: String,
  statusCode: String,
  success: Boolean,
  moduleProcess: String,
  timestamp: Date,
});

export default mongoose.model('logHistory', HistorySchena);
