import { Column, Double } from 'typeorm';

class Product {
  @Column()
  name: string;

  @Column()
  price: Double;
}

export default Product;
