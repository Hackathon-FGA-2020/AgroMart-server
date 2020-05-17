import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import authMiddleware from '../middlewares/ensureAuthenticate';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);
usersRouter.get('/:id', usersController.show);

usersRouter.use(authMiddleware);

usersRouter.put('/', usersController.update);
usersRouter.delete('/', usersController.delete);

export default usersRouter;
