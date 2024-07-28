const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const trackRoutes = require('./routes/trackRoutes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'));


app.use('/api', trackRoutes);

module.exports = app;
