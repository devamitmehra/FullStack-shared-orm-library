import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserAndSettings1629100000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" SERIAL PRIMARY KEY,
        "firstName" VARCHAR NOT NULL,
        "lastName" VARCHAR NOT NULL,
        "email" VARCHAR NOT NULL,
        "password" VARCHAR NOT NULL
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "settings" (
        "id" SERIAL PRIMARY KEY,
        "isNotificationEnabled" BOOLEAN NOT NULL,
        "isNewDashboardEnabled" BOOLEAN NOT NULL,
        "timezone" VARCHAR NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "settings"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
