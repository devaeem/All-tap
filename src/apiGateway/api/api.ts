import express from "express";

import Config from "../../config/setting";
import Routes from "../../routes";

const router = express.Router();

router.use(Config.api.version, Routes.crudRoutes);
// module.exports = router;
export default router;
