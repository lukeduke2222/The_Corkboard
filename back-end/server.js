const express = require('express');
const bodyParser = require("body-parser");

// Configure multer so that it will upload to '../front-end/public/images'


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/board', {
  useNewUrlParser: true
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/notes', async (req, res) => {
  const note = new Note({
    name: req.body.name,
    message: req.body.message,
    path: req.body.path,
  });
  try {
    console.log("before save");
    await note.save();
    console.log("after save");
    res.send(note);
    console.log("after send");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for items in the museum: a title and a path to an image.
const noteSchema = new mongoose.Schema({
  name: String,
  message: String,
  path: String,
});

// Create a model for items in the museum.
const Note = mongoose.model('Note', noteSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  console.log("in /api/photos")
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Get a list of all of the items in the museum.
app.get('/api/notes', async (req, res) => {
  try {
    let notes = await Note.find();
    res.send(notes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  //console.log("in REST DELETE");
  try {
    //console.log("in REST DELETE try");
    await Note.deleteOne({_id: req.params.id});
    console.log("in REST DELETE after deleteOne " + req.params.id);
    res.sendStatus(200);
  } catch (error) {
    //console.log("in REST DELETE error");
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  //console.log("in REST DELETE");
  try {
    //console.log("in REST DELETE try");
    let note = await Note.findOne({_id: req.params.id});
    note.name = req.body.name;
    note.message = req.body.message;
    console.log("in REST PUT name from " + note.name + " to "+ req.body.name);
    note.save();
    res.sendStatus(200);
  } catch (error) {
    //console.log("in REST DELETE error");
    console.log(error);
    res.sendStatus(500);
  }
});



app.listen(3000, () => console.log('Server listening on port 3000!'));
