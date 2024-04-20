/* These lines of code are importing necessary modules and files for setting up an Express server in a
TypeScript environment. Here's a breakdown: */

/* The line `import express from "express";` is importing the Express module into the current
TypeScript file. Express is a popular web application framework for Node.js that provides a set of
features for building web applications and APIs. By importing Express in this way, the code can
utilize the functionalities provided by the Express framework to set up and configure a web server
within the TypeScript environment. */
import express from "express";

/* The line `import apiGateway from "./api/api";` is importing a module or file named `apiGateway` from
the relative path `./api/api`. This import statement is used to bring in functionality or code from
a separate file or module to be used within the current file. In this case, it is likely importing
the API routes or handlers defined in the `api` directory to be used by the Express server setup in
the current file. */
import apiGateway from "./api/api";

/* The line `import Config from "../config/setting";` is importing a module or file named `Config` from
the relative path `../config/setting`. This import statement is used to bring in configuration
settings or variables from a separate file or module to be used within the current file. In this
case, it is likely importing some configuration settings for the Express server setup. */
import Config from "../config/setting";

/* `const app = express();` is creating an instance of the Express application. By calling `express()`,
you are initializing a new Express application that represents your web server. This `app` object
will be used to configure routes, middleware, and other settings for your server. It serves as the
main entry point for setting up and defining the behavior of your Express server. */
const app = express();

/* `app.use(Config.api.prefix, apiGateway);` is setting up a middleware function in the Express
application (`app`). Middleware functions in Express are functions that have access to the request
object (`req`), the response object (`res`), and the next middleware function in the application's
request-response cycle. */
app.use(Config.api.prefix, apiGateway);

/* `export default app;` is exporting the `app` object as the default export of this TypeScript module.
By using `export default`, the `app` object can be imported and used in other modules or files that
import this module. This allows other parts of the application to access and utilize the Express
application instance created in this module for setting up routes, middleware, and other server
configurations. */
export default app;
