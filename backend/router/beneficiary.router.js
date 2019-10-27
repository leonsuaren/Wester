const express = require('express');
const router = express.Router();
const beneficiaryController = require('./../controller/beneficiary.controller')

router.route('/')
  .get(beneficiaryController.getBeneficiary)
  .post(beneficiaryController.postBeneficiary)
  .put(beneficiaryController.putBeneficiary)
  .delete(beneficiaryController.deleteBeneficiary)

module.exports = router;
