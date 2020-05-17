import {
  Column,
  ObjectID,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

import Product from './Product';
import Localization from './Localization';

@Entity('stores')
class Store {
  @ObjectIdColumn()
  id: ObjectID;

  @Column('uuid')
  owner_id: string;

  @Column()
  banner: string;

  @Column()
  name: string;

  @Column()
  contact_number: string;

  @Column()
  description: string;

  @Column()
  city: string;

  @Column()
  open_at: string;

  @Column()
  close_at: string;

  @Column(type => Localization)
  localization: Localization;

  @Column(type => Product)
  products: Product[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Store;
