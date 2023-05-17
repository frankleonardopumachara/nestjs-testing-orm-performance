import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("posts")
export class Post {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  content: string;

  @ManyToOne(() => User, { nullable: false })
  user: User;
}
