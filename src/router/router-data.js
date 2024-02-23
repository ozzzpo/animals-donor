import Dashboard from "../pages/Dashboard/Dashboard";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "./ProtectedRoute";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },

  {
    path: "*",
    element: <NotFound />,
  },
];
