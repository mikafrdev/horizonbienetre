const express = require("express");
const { emailContact } = require("../controllers/email-contact");
const { sendEmailAutoResponse } = require('../controllers/email-auto-response');
const validateContact = require("../middleware/validate-contact");

const router = express.Router();

router.post("/contact", validateContact, emailContact);
router.post("/auto-response", sendEmailAutoResponse);

module.exports = router;
