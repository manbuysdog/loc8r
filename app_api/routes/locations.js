/**
 * Created by rob on 10/07/2017.
 */
var express = require('express');
var router = express.Router();
var ctrlLocations = require('/controllers/locations');
var ctrlReviews = require('/controllers/reviews');

// locations
router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);



// reviews