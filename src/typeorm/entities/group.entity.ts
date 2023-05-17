import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dates } from "./dates.entity";
import { User } from "./user.entity";

@Entity("groups")
export class Group extends Dates {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  description: string | null;

  @ManyToMany(() => User, { nullable: false })
  @JoinTable()
  users: User[];
}
