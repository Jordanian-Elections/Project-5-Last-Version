const express = require("express");
const router = express.Router();
const requests = require("../controllers/requests");

router.post("/contact", requests.contactRequest);
router.get("/nationalId/:national_id", requests.getUserByNationalId);
router.post("/local-election-requests", requests.createLocalElectionRequest);
router.post("/party-election-requests", requests.createPartyElectionRequest);

module.exports = router;
