const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [
      55,
      'The Course name must be less than or equal to 55 characters',
    ],
    required: [true, 'Course name is required'],
  },
  duration: {
    type: Number,
    required: [true, 'Duration is required'],
    min: [1, 'Duration must be at least 1 years'],
  },
  seatLeft: {
    type: Number,
    required: [true, 'Number of seats available is required'],
    min: [0, 'Number of seats must be at least 0'],
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    maxLength: [
      255,
      'Short description must be less than or equal to 255 characters',
    ],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  curriculum: {
    type: String,
    required: [true, 'Curriculum is required'],
  },
  brochureLink: {
    type: String,
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: 'Invalid URL format. Please enter a valid URL.',
    },
  },
});

module.exports = mongoose.model('Course', courseSchema);
