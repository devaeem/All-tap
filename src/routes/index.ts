/* This code snippet is importing the `crudRoutes` from the `crud/crud.routes` file and then exporting
it as part of an object named `routes`. The `crudRoutes` module is being imported and assigned to
the `crudRoutes` property of the `routes` object. Finally, the `routes` object is being exported as
the default export of this module. */
import crudRoutes from "./crud/crud.routes";

/* `const routes = { crudRoutes };` is creating an object named `routes` with a property `crudRoutes`
that holds the value of the imported `crudRoutes` module. This syntax is a shorthand way of defining
an object with a property that has the same name as the variable holding the value. */
const routes = { crudRoutes };

/* `export default routes;` is exporting the `routes` object as the default export of the module. This
means that when another module imports from this module without specifying a particular export, it
will receive the `routes` object as the default export. */
export default routes;
