import { prop, modelOptions, Severity, pre, post } from "@typegoose/typegoose";
import { v4 as Uuid } from "uuid";

@modelOptions({
  schemaOptions: {
    _id: false,
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class BaseSchema {
  @prop({ required: true, default: Uuid })
  _id: string;

  @prop({ required: true, default: true })
  active: boolean;
}
