import AddPet from "../pages/AddPet/AddPet";
import ChangePet from "../pages/ChangePet/ChangePet";
import Dashboard from "../pages/Dashboard/Dashboard";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import ProtectedRoute from "./ProtectedRoute";
import DonorInfo from "../pages/DonorInfo/DonorInfo";
import HelpPet from "../pages/HelpPet/HelpPet";
import RecipientInfo from "../pages/RecipientInfo/RecipientInfo";

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
    path: "/donor",
    element: <DonorInfo />,
  },
  {
    path: "/help",
    element: <HelpPet />,
  },
  {
    path: "/recipient",
    element: <RecipientInfo />,
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
    path: "/petInfo",
    element: (
      <ProtectedRoute>
        <ChangePet />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
