import { Route } from "react-router-dom";

import HomeTemplate from "../pages/1.HomeTemplate";
import Home from "../pages/1.HomeTemplate/1.Home";
import MovieList from "../pages/1.HomeTemplate/2.MovieDetail";
import MovieDetail from "../pages/1.HomeTemplate/2.MovieDetail";
import TicketBooking from "../pages/1.HomeTemplate/3.TicketBooking";

import AdminTemplate from "../pages/2.AdminTemplate";
import Dashboard from "../pages/2.AdminTemplate/1.Dashboard";
import Users from "../pages/2.AdminTemplate/2.Users";
import Movies from "../pages/2.AdminTemplate/3.Movies/index.jsx";

import PageNotFound from "../pages/3.PageNotFound";

import HomeHeader from "../pages/1.HomeTemplate/_components/1.Header/index.jsx";
import AdminHeader from "../pages/2.AdminTemplate/_components/1.Header/index.jsx";

const routes = [
  {
    path: "",
    element: <HomeTemplate />,
    nested: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "movie-list",
        element: <MovieList />,
        child: [
          {
            path: "movie-detail",
            element: <MovieDetail />
          },
        ]
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
        path: "/admin",
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
  return (
    route.nested?.map((child) => {
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
    if (route.nested) {
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

const renderHeader = () => { }

export { renderRoutes, renderHeader };

export default routes;
