import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @ManyToMany((type) => Coffee, (coffee) => coffee.flavors)
  public coffees: Array<Coffee>;
}
