const express = require('express');
const app = express();
const cors = require('cors');
const questions = require('./data/questions');
const appTextElements = require('./data/AppTextElements');
const learningCenterTextElements = require('./data/LearningCenterTextElements');

app.use(express.json());

app.use(express.static("public"))

app.use(cors());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Showcase';
app.locals.appTextElements = appTextElements;
app.locals.learningCenterTextElements = learningCenterTextElements;
app.locals.questions = questions;

app.get('/api/v1/home', (request, response) => {
  const appTextElements = app.locals.appTextElements
  response.json({ appTextElements });
});

app.get('/api/v1/learning_center', (request, response) => {
  const learningCenterTextElements = app.locals.learningCenterTextElements
  response.json({ learningCenterTextElements });
});

app.get('/api/v1/quiz_center', (request, response) => {
  const questions = app.locals.questions
  response.json({ questions });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
