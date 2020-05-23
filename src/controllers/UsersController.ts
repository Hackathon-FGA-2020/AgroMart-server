import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import CreateUserService from '../services/CreateUserService';
import AppError from '../errors/AppError';

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
    const { id } = request.params;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }
}
