import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';

import Store from '../schemas/Store';
import CreateStoreService from '../services/CreateStoreService';
import AppError from '../errors/AppError';

export default class StoresController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      banner,
      name,
      contact_number,
      description,
      city,
      open_at,
      close_at,
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
      city,
      open_at,
      close_at,
      localization,
      products,
    });

    return response.json({ store });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const storesRepository = getMongoRepository(Store, 'mongo');

    try {
      const store = await storesRepository.findOne(id);

      if (!store) {
        throw new AppError('Store not found.', 404);
      }

      return response.json(store);
    } catch {
      throw new AppError('Id out of expected format.', 404);
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { name, city, userId } = request.query;

    const storesRepository = getMongoRepository(Store, 'mongo');

    const stores = await storesRepository.find();

    if (city) {
      const filteredStores = stores.filter(store => store.city === city);

      return response.json(filteredStores);
    }

    if (name) {
      const filteredStores = stores.filter(store =>
        store.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
      );

      return response.json(filteredStores);
    }

    if (userId) {
      const filteredStores = stores.filter(store => store.owner_id === userId);

      return response.json(filteredStores);
    }

    return response.json(stores);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const {
      banner,
      name,
      contact_number,
      description,
      city,
      open_at,
      close_at,
      localization,
      products,
    } = request.body;

    const storesRepository = getMongoRepository(Store, 'mongo');

    const store = await storesRepository.findOneAndUpdate(
      { owner_id: id },
      {
        $set: {
          banner,
          name,
          contact_number,
          description,
          city,
          open_at,
          close_at,
          localization,
          products,
        },
      },
      { returnOriginal: false },
    );

    return response.json(store);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const storesRepository = getMongoRepository(Store, 'mongo');
    const store = await storesRepository.findOneAndDelete({ owner_id: id });
    return response.json({ store });
  }
}
