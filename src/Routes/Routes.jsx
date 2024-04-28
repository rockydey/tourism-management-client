import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import PrivateRoute from "./PrivateRoute";
import ViewSpot from "../pages/ViewSpot/ViewSpot";
import MyList from "../pages/MyList/MyList";
import ViewCountry from "../pages/ViewCountry/ViewCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://tourism-management-server-zeta.vercel.app/all-spots"),
      },
      {
        path: "/view-country/:name",
        element: <ViewCountry />,
        loader: ({ params }) =>
          fetch(`https://tourism-management-server-zeta.vercel.app/country-list/${params.name}`),
      },
      {
        path: "/all-spot",
        element: <AllTouristsSpot />,
        loader: () => fetch("https://tourism-management-server-zeta.vercel.app/all-spots"),
      },
      {
        path: "/view-spot/:id",
        element: (
          <PrivateRoute>
            <ViewSpot />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tourism-management-server-zeta.vercel.app/all-spots/${params.id}`),
      },
      {
        path: "/add-spot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
