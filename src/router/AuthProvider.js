import { createContext, useContext } from "react";
import { useSelector } from "react-redux";

const AuthContext = createContext(false);

export default function AuthProvider({ children, isAuth }) {
  return <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }
  return context;
};
