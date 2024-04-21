import { CategoriesSchema } from "../../models/schema";

export const list = async () => {
  try {
    const categories = await CategoriesSchema.find().exec();
    return categories;
  } catch (error) {
    throw error;
  }
};

export const create = async (data: any) => {
  try {
    console.log("data", data);

    const data2 = await CategoriesSchema.create(data);
    return data2;
  } catch (error) {
    throw error;
  }
};
