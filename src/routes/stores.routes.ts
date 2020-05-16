import { Router } from 'express';

import CreateStoreService from '../services/CreateStoreService';

const storesRouter = Router();

storesRouter.post('/', async (request, response) => {
  const {
    banner,
    name,
    contact_number,
    description,
    localization,
    products,
  } = request.body;

  const createStore = new CreateStoreService();

  const store = await createStore.execute({
    owner_id: request.user.id,
    banner,
    name,
    contact_number,
    description,
    localization,
    products,
  });

  return response.json({ store });
});

export default storesRouter;
