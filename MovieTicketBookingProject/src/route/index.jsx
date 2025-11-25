import { Route } from "react-router-dom";

import HomeTemplate from "../pages/1.HomeTemplate";
import Home from "../pages/1.HomeTemplate/1.Home";
import MovieList from "../pages/1.HomeTemplate/2.MovieList";
import MovieDetail from "../pages/1.HomeTemplate/3.MovieDetail";
import TicketBooking from "../pages/1.HomeTemplate/4.TicketBooking";

import AdminTemplate from "../pages/2.AdminTemplate";
import Dashboard from "../pages/2.AdminTemplate/1.Dashboard";
import Movies from "../pages/2.AdminTemplate/2.Movies";
import Users from "../pages/2.AdminTemplate/3.Users";

import PageNotFound from "../pages/3.PageNotFound";

const routes = [
  {
    path: "/",
    element: <HomeTemplate />,
    nested: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "movie-list",
        element: <MovieList />,
      },
      {
        path: "movie-detail/:maPhim",
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
    nested: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "users",
        element: <Users />
      },
      {
        path: "movies",
        element: <Movies />
      },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />
  },
];

const renderRoute = (route) => {
  return route.nested?.map((child) => (
    <Route
      key={child.path}
      path={child.path}
      element={child.element}
    >
      {child.nested && renderRoute(child)}
    </Route>
  ));
};

const renderRoutes = () => {
  return routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={route.element}
    >
      {route.nested && renderRoute(route)}
    </Route>
  ));
};

export { renderRoutes };

export default routes;
