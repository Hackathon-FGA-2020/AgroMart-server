import { Column } from 'typeorm';

class Localization {
  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  address: string;
}

export default Localization;
