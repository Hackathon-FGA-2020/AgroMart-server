import { Request, Response } from 'express';

import CreateStoreService from '../services/CreateStoreService';

export default class StoresController {
  public async create(request: Request, response: Response): Promise<Response> {
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
  }

  public async show(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }
}
