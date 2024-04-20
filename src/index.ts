/* This code snippet is setting up an Express server using TypeScript. Here's a breakdown of what each
part is doing: */
import express, { Express, Request, Response } from "express";
/* The lines `import app from "./apiGateway";` and `import config from "./config/setting";` are
importing modules from specific files in the project directory. */
import app from "./apiGateway";
import config from "./config/setting";
/* These lines are importing middleware modules that are commonly used in Express applications: */
/* `import cors from "cors";` is importing the CORS (Cross-Origin Resource Sharing) middleware module
from the "cors" package. This middleware is commonly used in Express applications to handle
cross-origin requests by allowing or restricting access to resources based on the origin of the
request. By importing and using the `cors` middleware in the Express server setup, you are enabling
CORS support for your server. */
import cors from "cors";

/* `import bodyParser from "body-parser";` is importing the body-parser middleware module from the
"body-parser" package. Body-parser is a middleware for handling JSON, Raw, Text, and URL-encoded
form data in Express applications. By importing and using the `body-parser` middleware in the
Express server setup, you are enabling the server to parse incoming request bodies in various
formats, such as JSON, and make them available in `req.body` for further processing within your
application. */
import bodyParser from "body-parser";

/* `import morgan from "morgan";` is importing the Morgan middleware module from the "morgan" package.
Morgan is a popular HTTP request logger middleware for Node.js. By importing and using the `morgan`
middleware in the Express server setup, you are enabling the server to log information about
incoming requests, such as request method, URL, status code, response time, and more. This can be
helpful for debugging, monitoring, and analyzing the server's behavior during development and
production. */
import morgan from "morgan";

/* `const port = config.port;` is assigning the value of the `port` property from the `config` object
to the variable `port`. This allows the server to listen on the specified port defined in the
configuration settings. By using this approach, the port number can be easily configured and changed
in the `config` file without modifying the server setup code. */
const port = config.port;

/* `app.use(cors());` is setting up Cross-Origin Resource Sharing (CORS) middleware in the Express
application. This allows the server to handle requests from different origins. */
app.use(cors());

/* `app.use(bodyParser.json({ limit: "20mb" }));` is setting up the body-parser middleware in the
Express application with a specific configuration option. */
app.use(bodyParser.json({ limit: "20mb" }));

/* `app.use(morgan("dev"));` is setting up the Morgan middleware in the Express application with the
"dev" format. Morgan is a popular HTTP request logger middleware for Node.js that logs information
about incoming requests to the server. */
app.use(morgan("dev"));

/* This code snippet is setting up a route in the Express server using the HTTP GET method. When a GET
request is made to the root path ("/") of the server, the callback function `(req: Request, res:
Response) => { res.send("Hello, Express with TypeScript!"); }` is executed. */
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

/* `app.listen(port, () => {
  console.log(`Server is running on port `);
});` */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
