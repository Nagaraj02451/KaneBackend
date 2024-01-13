const { TravelEnquire, TravelContact, } = require('../../controller/phonepe/paymentController');
const express = require('express');
const router = express();

router.post('/travelenquiry', TravelEnquire);
router.post('/travelcontact', TravelContact);

module.exports = router;