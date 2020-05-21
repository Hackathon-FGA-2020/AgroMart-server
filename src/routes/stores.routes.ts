import { Router } from 'express';

import StoresController from '../controllers/StoresController';
import authMiddleware from '../middlewares/ensureAuthenticate';

const storesRouter = Router();
const storesController = new StoresController();

storesRouter.get('/:id', storesController.show);
storesRouter.get('/', storesController.index);

storesRouter.use(authMiddleware);

storesRouter.post('/', storesController.create);
storesRouter.put('/', storesController.update);
storesRouter.delete('/', storesController.delete);

export default storesRouter;
