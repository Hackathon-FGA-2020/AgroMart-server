import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import FilesController from '../controllers/FilesController';
import authMiddleware from '../middlewares/ensureAuthenticate';

const filesRouter = Router();
const upload = multer(uploadConfig);
const filesController = new FilesController();

filesRouter.use(authMiddleware);

filesRouter.post('/', upload.single('file'), filesController.create);

export default filesRouter;
