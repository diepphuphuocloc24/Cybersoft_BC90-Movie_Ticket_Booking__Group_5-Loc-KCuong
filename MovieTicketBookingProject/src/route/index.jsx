import { Route } from "react-router-dom";

import HomeTemplate from "../pages/1.HomeTemplate";
import Home from "../pages/1.HomeTemplate/1.Home";
import MovieDetail from "../pages/1.HomeTemplate/2.MovieDetail";
import TicketBooking from "../pages/1.HomeTemplate/3.TicketBooking";

import AdminTemplate from "../pages/2.AdminTemplate";
import Dashboard from "../pages/2.AdminTemplate/1.Dashboard";
import Users from "../pages/2.AdminTemplate/2.Users";

import PageNotFound from "../pages/3.PageNotFound";

const routes = [
  {
    path: "",
    element: <HomeTemplate />,
    child: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "movie-detail",
        element: <MovieDetail />
      },
      {
        path: "buy-ticket",
        element: <TicketBooking />
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminTemplate />,
    child: [
      {
        path: "/admin",
        element: <Dashboard />
      },
      {
        path: "users",
        element: <Users />
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />
  },
];

const renderRoute = (route) => {
  return (
    route.child?.map((child) => {
      return (
        <Route
          key={child.path}
          path={child.path}
          element={child.element}
        />
      )
    })
  );
};

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.child) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        >
          {renderRoute(route)}
        </Route>
      )
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.element}
      />
    )
  });
};

export { renderRoutes };

export default routes;
