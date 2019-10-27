const mongoose = require('mongoose');
const Beneficiary = require('./../models/beneficiary');

exports.getBeneficiary = (req, res, next) => {

}

exports.postBeneficiary = (req, res, next) => {
  const beneficiary = new Beneficiary({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    street: req.body.street,
    city: req.body.city,
    zipeCode: req.body.zipeCode,
    state: req.body.state,
    country: req.body.country
  })
  beneficiary.save()
  .then(result => {
    res.status(201).json({
      result: result
    });
  })
  .catch(err => {
    res.status(500).json({
      err: err
    });
  });
}

exports.putBeneficiary = (req, res, next) => {

}

exports.deleteBeneficiary = (req, res, next) => {

}
