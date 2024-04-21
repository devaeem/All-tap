import {
  prop,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";
import { BaseSchema } from "../BaseSchema";

@modelOptions({
  schemaOptions: {
    collection: "categories",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Categories extends BaseSchema {
  @prop({ required: true })
  name: string;
}
