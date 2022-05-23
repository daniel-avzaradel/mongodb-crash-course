const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose
  .connect('mongodb://localhost:27017/appdb')
  .then(() => console.log('MongoDB successfully connected!'))
  .then(() => app.listen(5000, console.log(`Server is running on port 5000.`)))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
