// lib/db.ts
import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  // port: process.env.POSTGRES_PORT,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD, // replace with your DB password
  database: process.env.POSTGRES_DATABASE, // replace with your DB name
  synchronize: true, // Set to false in production
  logging: false,
  entities: [User],
  ssl: {
    rejectUnauthorized: false, // Only for development; do not use in production
  },
});

export const initializeDatabase = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
};

export default AppDataSource;
