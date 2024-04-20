/* The line `import { Request, Response } from "express";` in the TypeScript code snippet is importing
the `Request` and `Response` types from the "express" module. These types are used to define the
request and response objects in an Express.js application. By importing these types, the code can
utilize the type definitions provided by Express to ensure proper type checking and access to the
properties and methods associated with the request and response objects. */
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client/edge";
const prisma = new PrismaClient();
/**
 * The listCrud function handles GET requests to the homepage and sends a 200 status response.
 * @param {Request} req - The `req` parameter in the `listCrud` function stands for the request object,
 * which contains information about the incoming HTTP request such as headers, parameters, body, etc.
 * This parameter is of type `Request`, which is typically provided by web frameworks like Express.js
 * in Node.js applications.
 * @param {Response} res - The `res` parameter in the `listCrud` function is an object representing the
 * HTTP response that the server sends back to the client. It allows you to set the status code,
 * headers, and send data back to the client in response to a request.
 */
export const listCrud = (req: Request, res: Response) => {
  res.status(200).send("GET List  to the homepage");
};

/**
 * The type UserData defines an object with an id property that can be either a string or a number.
 * @property {string | number} id - The `id` property in the `UserData` type can be either a string or
 * a number.
 */
type UserData = {
  id: string | number;
};

/**
 * The function `getCrud` handles a GET request to the homepage with a specific ID parameter.
 * @param {Request} req - The `req` parameter in the `getCrud` function stands for the request object,
 * which contains information about the HTTP request made to the server, such as the request method,
 * headers, parameters, body, etc. It is typically provided by the Express.js framework's `Request`
 * object.
 * @param {Response} res - The `res` parameter in the `getCrud` function is an object representing the
 * HTTP response that the server sends back to the client. It allows you to send data, set headers, and
 * manage the response status. In this case, the `res` object is used to send a response with
 */
export const getCrud = (req: Request, res: Response) => {
  //const { id } = req.params;
  const dataCrud: UserData = { id: String(req.params.id) };
  res.status(200).send(`GET request to the homepage ${dataCrud.id}`);
};

/**
 * The `editCrud` function handles an edit request for a specific resource identified by its ID.
 * @param {Request} req - Request object containing information about the HTTP request
 * @param {Response} res - The `res` parameter in the `editCrud` function is an object representing the
 * HTTP response that the server sends back to the client. It allows you to send data, set headers, and
 * manage the response status. In this case, the `res` object is used to send a response with
 */
export const editCrud = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).send(`EDT request to the homepage ${id}`);
};

/**
 * The function `deleteCrud` handles DELETE requests by extracting the id from the request parameters
 * and sending a response with the id.
 * @param {Request} req - The `req` parameter in the `deleteCrud` function stands for the request
 * object. It contains information about the HTTP request made to the server, including headers,
 * parameters, body, and other details sent by the client. In this case, the `req` parameter is of type
 * `Request`,
 * @param {Response} res - The `res` parameter in the `deleteCrud` function is an object representing
 * the HTTP response that the server sends back to the client. It allows you to send a response back to
 * the client with data, status codes, headers, etc. In this case, the `res` object is used
 */
export const deleteCrud = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).send(`DEL request to the homepage ${id}`);
};
