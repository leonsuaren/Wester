const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, require: true },
  lastName: { type: String, require: true },
  phoneNumber: { type: String, require: true },
  country: { type: String, require: true },
  state: { type: String, require: true },
  email: { type: String, require: true },
  username: { type: String, require: true },
  password: { type: String, require: true },
  street: { type: String, require: false },
  city: { type: String, require: false },
  zipeCode: { type: String, require: false }
});

module.exports = mongoose.model('User', userSchema);
