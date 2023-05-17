import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Dates } from "./dates.entity";
import { Profile } from "./profile.entity";

@Entity("users")
export class User extends Dates {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 20 })
  name: string;

  @Column({ type: "varchar", length: 300 })
  password: string;

  @Column({ type: "varchar", length: 300 })
  passwordSalt: string;

  @OneToOne(() => Profile, { nullable: false })
  @JoinColumn()
  profile: Profile;
}
