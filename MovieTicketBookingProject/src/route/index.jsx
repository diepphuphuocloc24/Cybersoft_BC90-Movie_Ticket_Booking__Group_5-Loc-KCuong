import { Route } from "react-router-dom";

import HomeTemplate from "../pages/HomeTemplate";
import Home from "../pages/HomeTemplate/Home";
import MovieList from "../pages/HomeTemplate/MovieList";
import MovieDetail from "../pages/HomeTemplate/MovieDetail";
import TicketBooking from "../pages/HomeTemplate/TicketBooking";
import CheckOut from "../pages/HomeTemplate/CheckOut";

import AdminTemplate from "../pages/AdminTemplate";
import Dashboard from "../pages/AdminTemplate/Dashboard";
import Movies from "../pages/AdminTemplate/Movies";
import Users from "../pages/AdminTemplate/Users";

import PageNotFound from "../pages/PageNotFound";

import AuthTemplate from "../pages/AuthTemplate";

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
        path: "buy-ticket/:maLichChieu",
        element: <TicketBooking />
      },
      {
        path: "check-out",
        element: <CheckOut />
      }
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

  {
    path: "auth",
    element: <AuthTemplate />
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
