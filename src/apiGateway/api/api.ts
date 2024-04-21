import express from "express";
import Config from "../../config/setting";
import Routes from "../../routes";

const router = express.Router();

router.use(Config.api.version, Routes.crudRoutes);
router.use(Config.api.version, Routes.categoriesRoutes);

export default router;
