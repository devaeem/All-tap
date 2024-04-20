/* The code snippet is importing necessary modules and files for setting up a router with Express.js: */
/* `import express from "express";` is importing the Express.js module into the current file. This
allows the code to use functionalities provided by Express.js, such as creating a server, defining
routes, handling requests, and more. By importing Express.js in this way, the code can access all
the features and methods provided by the Express.js framework. */
import express from "express";

/* `import Config from "../../config/setting";` is importing a configuration file named `setting.ts`
from the `config` directory located two levels above the current file. This configuration file
likely contains settings and configurations for the application, such as API versions, database
connections, environment variables, and more. By importing this file, the code can access and use
the configuration settings defined within `setting.ts` throughout the application. */
import Config from "../../config/setting";

/* `import Routes from "../../routes";` is importing a file or module named `Routes` from a directory
located two levels above the current file. This `Routes` module likely contains route definitions or
configurations for the application. By importing this module, the code can access and use the route
configurations defined within `Routes` throughout the application. */
import Routes from "../../routes";

/* The code snippet is creating a router instance using Express.js and then using this router to define
routes for a specific API version. The `express.Router()` function creates a new router object,
which can be used to define routes for different HTTP methods. */
const router = express.Router();

/* `router.use(Config.api.version, Routes.crudRoutes);` is setting up routes for a specific API version
using the Express.js router instance. */
router.use(Config.api.version, Routes.crudRoutes);

/* `export default router;` is exporting the `router` object as the default export of this module. This
means that when another module imports this module, they will receive the `router` object as the
default export. */
export default router;
