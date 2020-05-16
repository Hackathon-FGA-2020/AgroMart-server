import { getMongoRepository, Double } from 'typeorm';

import AppError from '../errors/AppError';
import Store from '../schemas/Store';

interface Localization {
  latitude: string;
  longitude: string;
  address: string;
}

interface Product {
  name: string;
  price: Double;
}

interface Request {
  owner_id: string;
  banner: string;
  name: string;
  contact_number: string;
  description: string;
  localization: Localization;
  products: Product[];
}

class CreateUserService {
  public async execute({
    owner_id,
    banner,
    name,
    contact_number,
    description,
    localization,
    products,
  }: Request): Promise<Store> {
    const storesRepository = getMongoRepository(Store, 'mongo');

    const checkUserHasStore = await storesRepository.findOne({
      where: { owner_id },
    });

    if (checkUserHasStore) {
      throw new AppError('This user already has a store.');
    }

    const store = storesRepository.create({
      owner_id,
      banner,
      name,
      contact_number,
      description,
      localization,
      products,
    });

    await storesRepository.save(store);

    return store;
  }
}

export default CreateUserService;
