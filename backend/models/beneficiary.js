const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const beneficiarySchema = mongoose.Schema({
  name: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  phoneNumber: { type: Number, require: true },
  street: { type: String, require: true },
  city: { type: String, require: true },
  zipeCode: { type: Number, require: true },
  state: { type: String, require: true },
  country: { type: String, require: true }
})

beneficiarySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Beneficiary', beneficiarySchema)
