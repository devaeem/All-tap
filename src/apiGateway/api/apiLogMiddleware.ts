import { Request, Response, NextFunction } from "express";
import { logSchema } from "../../models/schema";
import mongoose, { Schema, Document } from "mongoose";

export interface IApiLog extends Document {
  method: string;
  url: string;
  duration: number;
  createdAt: Date;
  ipAddress: string;
}

export const logRequestTime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startTime = Date.now();
  const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  res.once("finish", async () => {
    const endTime = Date.now();
    const requestDuration = endTime - startTime;

    const apiLog: any = {
      method: req.method,
      url: req.originalUrl,
      duration: requestDuration,
      createdAt: new Date(),
      ipAddress: ipAddress as string,
    };

    try {
      await logSchema.create(apiLog);
      console.log(
        `API Log saved: ${req.method} ${req.originalUrl} took ${requestDuration} ms`
      );
    } catch (err) {
      console.error("Error saving API Log:", err);
    }
  });

  next();
};
