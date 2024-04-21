import express, { Express, Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { list, create } from "./categories.service";
import { CreateCategoryDto } from "./dto/create.dto";
import {
  getPaginatedResult,
  getPaginationOptions,
  getPaginationResult,
} from "../../function/pagination";
import { ListCategoryDto } from "./dto/list.dto";
import { Categories } from "../../models/schema/categories/categories.schema";

export const listCategories = async (req: Request, res: Response) => {
  try {
    const listCategories = async (): Promise<Categories[]> => {
      const categories = await list();
      return categories;
    };

    const paginationResult = await getPaginatedResult(req, listCategories);

    // const categories = await list();

    // const paginationResult = await getPaginatedResult(req, () => categories);
    // const paginationOptions = getPaginationOptions(req);
    // const page = paginationOptions.page || 1;
    // const pageSize = paginationOptions.pageSize || 10;
    // const categories = await list();
    // const paginationResult = getPaginationResult(categories, page, pageSize);
    res.status(200).json(paginationResult);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createCategories = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const createCategoryDto: CreateCategoryDto = {
      name: req.body.name,
    };
    console.log("first", createCategoryDto);
    const createData = await create(createCategoryDto);
    res.status(200).send("Create Categories Success!");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
// import { Schema } from "../../models/schema";
// const cat = Schema.CategoriesSchema.find();
