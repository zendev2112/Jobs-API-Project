const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlenght: 50,
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlenght: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      // type: specifies that the type of this field is an ObjectId, which is a special data type in Mongoose used to reference other documents in the database
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('job', JobSchema);
