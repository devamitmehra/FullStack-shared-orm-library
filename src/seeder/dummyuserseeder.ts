import 'reflect-metadata';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

async function seed() {
  await AppDataSource.initialize();

  const userRepository = AppDataSource.getRepository(User);
  const saltRounds = 10;

  const users = [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', password: 'password' },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', password: 'password' },
    { firstName: 'Alice', lastName: 'Smith', email: 'alice.smith@example.com', password: 'password' },
    { firstName: 'Bob', lastName: 'Smith', email: 'bob.smith@example.com', password: 'password' },
    { firstName: 'Charlie', lastName: 'Brown', email: 'charlie.brown@example.com', password: 'password' },
    { firstName: 'David', lastName: 'Jones', email: 'david.jones@example.com', password: 'password' },
    { firstName: 'Eve', lastName: 'Johnson', email: 'eve.johnson@example.com', password: 'password' },
    { firstName: 'Frank', lastName: 'Williams', email: 'frank.williams@example.com', password: 'password' },
    { firstName: 'Grace', lastName: 'Lee', email: 'grace.lee@example.com', password: 'password' },
    { firstName: 'Hank', lastName: 'Taylor', email: 'hank.taylor@example.com', password: 'password' }
  ];

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    console.log(`Plain Password: ${user.password}, Hashed Password: ${hashedPassword}`);
    user.password = hashedPassword;
    const newUser = userRepository.create(user);
    await userRepository.save(newUser);
  }

  console.log('Seeded 10 users with hashed passwords');
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('Error seeding data:', err);
  process.exit(1);
});
