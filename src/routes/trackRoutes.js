const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController');

router.post('/tracks', trackController.createTrack);
router.get('/tracks', trackController.getAllTracks);
router.get('/tracks/:id', trackController.getTrackById);
router.put('/tracks/:id', trackController.updateTrack);
router.delete('/tracks/:id', trackController.deleteTrack);

module.exports = router;
