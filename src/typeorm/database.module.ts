import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Profile } from "./entities/profile.entity";
import { Group } from "./entities/group.entity";
import { Post } from "./entities/post.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "secreto",
      database: "testing-performance",
      entities: [
        User,
        Profile,
        Group,
        Post
      ],
      synchronize: true
    })
  ]
})
export class DatabaseModule {
}
