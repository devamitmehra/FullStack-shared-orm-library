# Shared ORM Library

This library contains the entities, migrations, and database configuration for the application. It also includes a seeder script to populate the database with initial data.

## Setup

1. Clone the repository:
    ```sh
    git clone <repository_url> shared-orm-library
    cd shared-orm-library
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create environment-specific `.env` files:
    - `development.env`
      ```plaintext
      DB_HOST=localhost
      DB_PORT=5432
      DB_USERNAME=your-username
      DB_PASSWORD=your-password
      DB_NAME=My-account
      ```

    - `production.env`
      ```plaintext
      DB_HOST=your-production-db-host
      DB_PORT=5432
      DB_USERNAME=your-production-username
      DB_PASSWORD=your-production-password
      DB_NAME=My-account
      ```

4. Build the project:
    ```sh
    npm run build
    ```

5. Run migrations:
    ```sh
    npm run migration:run
    ```

6. Seed the database with initial data:
    ```sh
    npm run seed
    ```

7. Link the shared ORM library for other projects to use:
    ```sh
    npm link
    ```

## Description

This library centralizes the environment configuration and provides the necessary entities and migrations for the application. It ensures consistency across the application by using a shared data source configuration.
