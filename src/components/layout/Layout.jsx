/* eslint-disable react/prop-types */
import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
