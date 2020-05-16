import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import storesRouter from './stores.routes';

import authMiddleware from '../middlewares/ensureAuthenticate';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/', authMiddleware, upload.single('file'), (request, response) => {
  console.log(request.file);
  response.json({ message: 'Hello World' });
});

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/stores', authMiddleware, storesRouter);

export default routes;
