const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/musicdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    url: String,
    image: String,
});

const Song = mongoose.model('Song', songSchema);

// API Endpoints
app.get('/songs', async (req, res) => {
    const songs = await Song.find();
    res.json(songs);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
