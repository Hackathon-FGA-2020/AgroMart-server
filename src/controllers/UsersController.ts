import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }
}
