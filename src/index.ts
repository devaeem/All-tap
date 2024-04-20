/* This code snippet is setting up an Express server using TypeScript. Here's a breakdown of what each
part is doing: */
import express, { Express, Request, Response } from "express";
/* The lines `import app from "./apiGateway";` and `import config from "./config/setting";` are
importing modules from specific files in the project directory. */
import app from "./apiGateway";
/* The line `import { connectToDatabase } from "./config/mongo";` is importing the `connectToDatabase`
function from a file located at `./config/mongo`. This function is likely responsible for
establishing a connection to a MongoDB database. By importing this function, the code can call it to
set up the necessary database connection for the Express server to interact with the MongoDB
database, perform data operations, and ensure data persistence. */
import { connectToDatabase } from "./config/mongo";

/* The line `import config from "./config/setting";` is importing a module from a specific file in the
project directory. In this case, it is importing a configuration settings module from the file
located at `./config/setting`. This module likely contains various configuration options and
settings for the Express server, such as the port number on which the server should listen, database
connection details, middleware configurations, environment variables, and other parameters that can
be used to customize and control the behavior of the server. */
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

/* `connectToDatabase` is a function that is being called to establish a connection to the database. In
this case, it is likely connecting to a MongoDB database based on the file path `./config/mongo`
where the function is imported from. Establishing a database connection is crucial for the server to
interact with the database, perform operations like reading and writing data, and handle data
persistence. This function is typically responsible for setting up the connection configuration,
connecting to the database server, and handling any errors that may occur during the connection
process. */
connectToDatabase();

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
