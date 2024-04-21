import { getModelForClass } from "@typegoose/typegoose";
import { Logs } from "./log.schema";

const logSchema = getModelForClass(Logs);
export { logSchema };
