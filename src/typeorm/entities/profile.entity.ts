import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Dates } from "./dates.entity";

@Entity("profiles")
export class Profile extends Dates {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 20 })
  photoUrl: string;

  @Column({ type: "varchar", length: 40 })
  address: string;

  @Column({ type: "varchar", length: 10 })
  country: string;
}
