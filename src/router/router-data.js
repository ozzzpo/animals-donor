import AddPet from "../pages/AddPet/AddPet";
import Dashboard from "../pages/Dashboard/Dashboard";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
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
    path: "/settings",
    element: (
      <ProtectedRoute>
        <Settings />
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
    path: "/add_pet",
    element: (
      <ProtectedRoute>
        <AddPet />
      </ProtectedRoute>
    ),
  },

  {
    path: "*",
    element: <NotFound />,
  },
];
