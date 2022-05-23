const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
    address: {
      type: Object,
      required: false,
    },
    hobbies: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true },
);

const Users = mongoose.model('Users');
