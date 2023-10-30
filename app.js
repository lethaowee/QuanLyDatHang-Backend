const express = require('express');
const cors = require('cors');

const app = express();

const qldhRoutes = require('./routes/QuanLyDatHangRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', qldhRoutes);

module.exports = app;
