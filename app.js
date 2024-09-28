const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/resumeBuilder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const resumeSchema = new mongoose.Schema({
  name: String,
  contact: String,
  skills: String,
  education: String,
  workExperience: [
    {
      jobTitle: String,
      jobDescription: String,
    },
  ],
});

const Resume = mongoose.model('Resume', resumeSchema);

// Save resume
app.post('/saveResume', (req, res) => {
  const resumeData = new Resume(req.body);
  resumeData.save().then(() => res.send("Resume saved successfully"));
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

