// // const express = require('express');
// // const router = express.Router();
// // const adsController = require('../controllers/adsController');

// // router.post('/ads', adsController.createAd);
// // router.get('/ads', adsController.getAllAds);
// // router.get('/ads/:id', adsController.getAdById);

// // module.exports = router;






// const express = require('express');
// const router = express.Router();
// const adsController = require('../controllers/adsController');

// router.post('/ads', adsController.createAd);
// router.get('/ads', adsController.getAllAds);
// router.get('/ads/:id', adsController.getAdById);

// module.exports = router;








const express = require('express');
const router = express.Router();
const adsController = require('../controllers/adsController');

router.post('/ads', adsController.createAd);
router.get('/ads', adsController.getAllAds);
router.get('/ads/:id', adsController.getAdById);

module.exports = router;
