import { useSelector } from "react-redux";
import AuthProvider from "./router/AuthProvider";
import { routes } from "./router/router-data";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'

function App() {
  const router = createBrowserRouter(routes);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <AuthProvider user={user}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
