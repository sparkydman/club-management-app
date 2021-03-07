const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

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

const PORT = process.env.PORT || 8000;

models.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
