import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../entities/user.entity";
import { profiles } from "../../seed";
import { Profile } from "../entities/profile.entity";
import { Group } from "../entities/group.entity";
import { Post } from "../entities/post.entity";

export class Seeding1684263808961 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const userRepo = queryRunner.manager.getRepository(User);
    const profileRepo = queryRunner.manager.getRepository(Profile);
    const groupRepo = queryRunner.manager.getRepository(Group);
    const postRepo = queryRunner.manager.getRepository(Post);

    await profileRepo.save(profiles, { chunk: 100 });
    // await userRepo.save(users, { chunk: 100 });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}
