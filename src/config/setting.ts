/* The line `import dotenv from "dotenv";` is importing the `dotenv` package in a TypeScript file. The
`dotenv` package is commonly used in Node.js applications to load environment variables from a
`.env` file into `process.env`. This allows you to keep sensitive information, such as API keys or
database credentials, out of your codebase and easily manage different configurations for different
environments. */
import dotenv from "dotenv";

/* The `dotenv.config()` function call is loading environment variables from a `.env` file into the
`process.env` object. In this specific case, it is loading the variables from a file named `.env` in
the current directory. This allows the application to access sensitive information like API keys or
database credentials without hardcoding them in the codebase. */
dotenv.config({
  path: ".env",
});

/* The `const config` object is defining configuration settings for the application. It includes two
properties: */
const config = {
  port: process.env.PORT || 3002,
  api: {
    prefix: "/api" || "/api/test",
    version: "/v1" || "/v1/test",
  },
};

/* `export default config;` is exporting the `config` object as the default export from this TypeScript
file. This means that other files or modules importing this file can access the `config` object by
importing it using `import config from './filename';` without needing to specify the exact name of
the exported object. */
export default config;
