const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Hola mi server en express');
});

app.get('/new-route', (request, response) => {
  response.send('Hola, nueva ruta');
});

app.get('/products', (request, response) => {
  response.json({
    name: 'Product 1',
    price: 1000,
  });
});

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
