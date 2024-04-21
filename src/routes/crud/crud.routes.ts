import express from "express";
import * as Controllers from "../../controllers";

const router = express.Router();

router.get("/crud", Controllers.listCrud);

router.get("/crud/:id", Controllers.getCrud);

export default router;
