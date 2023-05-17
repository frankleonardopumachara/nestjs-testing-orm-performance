import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";
import { dateTransformer, momentToStringTransformer } from ".";
import * as moment from "moment";
import { Transform } from "class-transformer";

export abstract class Dates {
  @Transform(momentToStringTransformer)
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    transformer: dateTransformer
  })
  createdAt!: moment.Moment;

  @Transform(momentToStringTransformer)
  @UpdateDateColumn({
    type: "timestamp",
    default: null,
    transformer: dateTransformer,
    nullable: true
  })
  editedAt!: moment.Moment | null;

  @Transform(momentToStringTransformer)
  @DeleteDateColumn({
    type: "timestamp",
    nullable: true,
    default: null,
    transformer: dateTransformer
  })
  deletedAt!: moment.Moment | null;
}
