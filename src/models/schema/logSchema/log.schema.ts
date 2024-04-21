import { prop, modelOptions, Severity } from "@typegoose/typegoose";
import { BaseSchema } from "../BaseSchema";

@modelOptions({
  schemaOptions: {
    collection: "log",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Logs extends BaseSchema {
  @prop({ required: true })
  method: string;

  @prop({ required: true })
  url: string;

  @prop({ required: true })
  duration: Number;

  @prop({ required: true })
  ipAddress: String;
}
