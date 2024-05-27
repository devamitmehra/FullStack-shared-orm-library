import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isNotificationEnabled: boolean;

  @Column()
  isNewDashboardEnabled: boolean;

  @Column()
  timezone: string;

  constructor() {
    this.id = 0;
    this.isNotificationEnabled = false;
    this.isNewDashboardEnabled = false;
    this.timezone = '';
  }
}
