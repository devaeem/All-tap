/* This code snippet is setting up a router in a TypeScript file using the Express framework. Here's a
breakdown of what each part is doing: */
import express from "express";
/* The line `import * as Controllers from "../../controllers";` is importing all exports from the file
located at "../../controllers" and assigning them to the variable `Controllers`. This allows you to
access the functions or variables exported from the controllers file using the `Controllers` object
in the current file. */
import * as Controllers from "../../controllers";

/* `const router = express.Router();` is creating a new router object using the `Router` function
provided by the Express framework. This router object will be used to define routes and handle HTTP
requests for specific endpoints within the application. By assigning the new router object to the
variable `router`, you can then add route handlers and middleware to it to define the behavior of
the application's routes. */
const router = express.Router();

/* `router.get("/crud", Controllers.listCrud);` is setting up a route handler for GET requests to the
"/crud" endpoint. When a GET request is made to the "/crud" endpoint, the function `listCrud` from
the `Controllers` object will be called to handle the request. This allows you to define the
behavior of the application when a GET request is made to the "/crud" endpoint, such as fetching and
returning a list of resources related to CRUD operations. */
router.get("/crud", Controllers.listCrud);

/* `router.get("/crud/:id", Controllers.getCrud);` is setting up a route handler for GET requests to
the "/crud/:id" endpoint. This endpoint expects a dynamic parameter `id` in the URL path. When a GET
request is made to this endpoint with a specific `id` value, the function `getCrud` from the
`Controllers` object will be called to handle the request. This allows you to define the behavior of
the application when a GET request is made to a specific "/crud" endpoint with a dynamic `id`
parameter, such as fetching and returning a specific resource related to CRUD operations based on
the provided `id`. */
router.get("/crud/:id", Controllers.getCrud);

/* `export default router;` is exporting the `router` object as the default export of this TypeScript
module. This means that when another module imports this module using `import Router from
'./routerFile';`, the `router` object will be the default import from this module. This allows other
modules to use the `router` object defined in this file for setting up routes and handling HTTP
requests within their own codebase. */
export default router;
