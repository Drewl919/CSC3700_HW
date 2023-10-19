const express = require('express');
const router = express.Router();
const path = require('path');
const surveyController = require("../controllers/survey")

router.get( '/survey', surveyController.getSurvey);
router.post('/submitSurvey', surveyController.submitSurvey)
router.get( '/about', surveyController.getAbout);
router.get( '/', surveyController.getNotFound);

exports.routes = router;