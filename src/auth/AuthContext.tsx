import { createContext, useContext, useMemo, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type AuthUser = { id: string; name: string };

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loginAsDemoUser: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

const demoUser: AuthUser = {
  id: "demo-user-1",
  name: "Demo User",
};

const LOCAL_STORAGE_KEY = "auth-user";

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useLocalStorage<AuthUser | null>(
    LOCAL_STORAGE_KEY,
    null
  );

  const loginAsDemoUser = () => {
    setUser(demoUser);
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: user !== null,
      loginAsDemoUser,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
