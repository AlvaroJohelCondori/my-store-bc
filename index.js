const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/auth.handler');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHanlder,
} = require('./middlewares/error.hanlder');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};

app.use(cors(options));

require('./utils/auth');

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/new-route', checkApiKey, (req, res) => {
  res.send('Hola, soy la nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHanlder);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
