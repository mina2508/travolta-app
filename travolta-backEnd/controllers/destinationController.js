const express = require('express');
const fs = require('fs/promises');
const destinationRouter = express.Router();
const distinationsHotels = require('../data/destinationsData.json');

destinationRouter.get('/', (req, res, next) => {
  const distinations = distinationsHotels.map((des) => {
    return { id: des.id, destination: des.destination };
  });
  res.send(distinations);
});
destinationRouter.post('/', (req, res, next) => {
  const { Destination: id } = req.body;
  const destinationInfo = distinationsHotels.find((d) => d.id === +id);
  res.send(destinationInfo);
});
module.exports = destinationRouter;
