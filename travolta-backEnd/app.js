const express = require('express');
const errorHandler = require('./helpers/errorHandlerMiddleware');
const destinationsRouter = require('./controllers/destinationController');
require('express-async-errors');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/detinations', destinationsRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
