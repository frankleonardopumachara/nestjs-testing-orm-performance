import * as moment from "moment";
import { TransformFnParams } from "class-transformer";
import { ValueTransformer } from "typeorm";

export const momentToStringTransformer = ({ value }: TransformFnParams) => {
  if (value === null) return value;
  return (value as moment.Moment).toISOString(false);
};

export const dateTransformer: ValueTransformer = {
  to(value: moment.Moment | undefined | null): string | undefined | null {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return value.toISOString();
  },
  // moment.Moment because a bug when using save from is called twice
  from(value: Date | moment.Moment | null | undefined): moment.Moment | null | undefined {
    if (moment.isMoment(value)) return value;
    if (value === undefined) return undefined;
    if (value === null) return null;
    return moment(value).utc(false);
  }
};
