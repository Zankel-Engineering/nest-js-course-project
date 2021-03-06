import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public type: string;

  @Column()
  public name: string;

  @Column('json')
  public payload: Record<string, any>;
}
