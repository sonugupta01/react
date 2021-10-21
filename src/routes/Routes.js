import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout.js";
import AdminRoutes from "./AdminRoutes.js";

const Routes = () => {
  const blogMenuClickHandler = (props) => {
    console.log("onrotes");
  };
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <h1>web</h1>
        </Route>

        <Route path="/admin">
          <AdminLayout blogMenuClickHandler={blogMenuClickHandler}>
            <AdminRoutes />
          </AdminLayout>
        </Route>
        <Route>
          <h1>web not found</h1>
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
