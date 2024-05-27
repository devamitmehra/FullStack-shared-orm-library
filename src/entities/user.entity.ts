import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor() {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }
}
