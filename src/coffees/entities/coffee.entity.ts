import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column({ nullable: true })
  public description: string;

  @Column()
  public brand: string;

  @Column({ default: 0 })
  public recommendations: number;

  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, { cascade: true })
  public flavors: Array<Flavor>;
}
