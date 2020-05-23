import { Request, Response } from 'express';

export default class FilesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    return response.json(file);
  }
}
