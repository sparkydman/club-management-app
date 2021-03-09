const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const models = require('./models');
const errorHandler = require('./middleware/error-handler.js');

dotenv.config();

// Init express
const app = express();

// Implement cors setup middleware
var whitelist = [
  'http://localhost:3000',
  'https://gozie-club-app.herokuapp.com',
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// implement express bodyparser middleware
app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/clubs', require('./routes/clubs'));
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname));
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8000;

models.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
