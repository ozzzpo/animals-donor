import { useSelector } from "react-redux";
import AuthProvider from "./router/AuthProvider";
import { routes } from "./router/router-data";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter(routes);
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <AuthProvider isAuth={isAuth}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
