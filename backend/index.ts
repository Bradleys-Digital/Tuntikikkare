import 'source-map-support/register';
import OpenAPIBackend from 'openapi-backend';
import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json());

// create api from definition
const api = new OpenAPIBackend({ definition: '../openapi-definition.yaml'});
// api.register(handlers);

api.register('notImplemented', (c, req, res) => {
  const { status, mock } = c.api.mockResponseForOperation(c.operation.operationId);
  return res.status(status).json(mock);
});

api.init();

// logging
app.use(morgan('combined'));

// use as express middleware
app.use((req, res) => api.handleRequest(req, req, res));

// start server
app.listen(9000, () => console.info('api listening at http://localhost:9000'));
