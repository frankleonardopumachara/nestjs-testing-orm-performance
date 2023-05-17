import { DataSource } from "typeorm";

export default new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "secreto",
  database: "testing-performance",
  logging: true,
  migrations: ["src/typeorm/migrations/**/*{.ts,.js}"],
  entities: ["src/**/*.entity{.ts,.js}"]
});
