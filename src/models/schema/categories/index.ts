import { getModelForClass } from "@typegoose/typegoose";
import { Categories } from "./categories.schema";

const CategoriesSchema = getModelForClass(Categories);
export { CategoriesSchema };
