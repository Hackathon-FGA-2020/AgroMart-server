import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import storesRouter from './stores.routes';
import filesRouter from './files.routes';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({ message: 'Hello from AgroMart!' });
});

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/stores', storesRouter);
routes.use('/files', filesRouter);

export default routes;
