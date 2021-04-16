import React, { useEffect, useState, useContext, createContext } from "react";
import nookies from "nookies";
import { firebase } from "./firebase";

interface AuthContextTypes {
  user: firebase.User | null | undefined;
  loading: boolean;
  logout: () => void;
}

const AuthCtx = createContext<AuthContextTypes>({
  user: null,
  loading: true,
  logout: () => {},
});

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const canceled = firebase.auth().onIdTokenChanged(async (i) => {
      if (!i) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
      }

      setUser(i);
      setLoading(false);
    });
    return () => canceled();
  }, []);
  return (
    <AuthCtx.Provider
      value={{ user, loading, logout: () => firebase.auth().signOut() }}
    >
      {children}
    </AuthCtx.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthCtx);
};

export { AuthProvider, useAuth };
