import { createContext, useContext } from "react";
import { useSelector } from "react-redux";

const AuthContext = createContext({});

export default function AuthProvider({ children, user }) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }
  return context;
};
