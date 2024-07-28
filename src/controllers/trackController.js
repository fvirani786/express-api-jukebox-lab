const Track = require('../models/track');


exports.createTrack = async (req, res) => {
  try {
    const newTrack = new Track(req.body);
    await newTrack.save();
    res.status(201).json(newTrack);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getAllTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getTrackById = async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);
    if (!track) return res.status(404).json({ message: 'Track not found' });
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateTrack = async (req, res) => {
  try {
    const track = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!track) return res.status(404).json({ message: 'Track not found' });
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteTrack = async (req, res) => {
  try {
    const track = await Track.findByIdAndDelete(req.params.id);
    if (!track) return res.status(404).json({ message: 'Track not found' });
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
