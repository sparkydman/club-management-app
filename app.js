const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const favicon = require('express-favicon');

const models = require('./models');
const errorHandler = require('./middleware/error-handler.js');

dotenv.config();

// Init express
const app = express();

// Implement default cors setup middleware
app.use(cors());

// implement express bodyparser middleware
app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/clubs', require('./routes/clubs'));
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  app.use(favicon(__dirname + 'frontend/build/favicon.ico'));
  app.use(express.static(__dirname));
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8000;

models.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
