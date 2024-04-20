import { Request, Response } from "express";

export const listCrud = (req: Request, res: Response) => {
  res.status(200).send("GET List  to the homepage");
};

export const getCrud = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).send(`GET request to the homepage ${id}`);
};
