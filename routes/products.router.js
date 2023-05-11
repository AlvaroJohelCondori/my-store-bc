const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (request, response) => {
  const products = [];
  const { size } = request.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  response.json(products);
});

router.get('/filter', (request, response) => {
  response.send('Yo soy un filter');
});

router.get('/:id', (request, response) => {
  const { id } = request.params;
  if (id === '999') {
    response.status(404).json({
      message: 'Not Found',
    });
  } else {
    response.status(200).json({
      id,
      name: 'Product 2',
      price: 2000,
    });
  }
});

router.post('/', (request, response) => {
  const body = request.body;
  response.status(201).json({
    message: 'Created',
    data: body,
  });
});

router.patch('/:id', (request, response) => {
  const { id } = request.params;
  const body = request.body;
  response.json({
    message: 'Update',
    data: body,
    id,
  });
});

router.delete('/:id', (request, response) => {
  const { id } = request.params;
  const body = request.body;
  response.json({
    message: 'Deleted',
    id,
  });
});

module.exports = router;
