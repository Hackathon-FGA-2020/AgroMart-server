import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

import authMiddleware from '../middlewares/ensureAuthenticate';

const routes = Router();

routes.get('/', authMiddleware, (request, response) => {
  console.log(request.user);
  response.json({ message: 'Hello World' });
});

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
