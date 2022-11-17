import { createContext, useEffect, useState } from "react";
import { getUserFromLocalCookie } from "./auth";

let userState;

const User = createContext({ user: null });

export const UserProvider = ({ value, children }) => {
  const { user } = value;

  useEffect(() => {
    if (!userState && user) {
      userState = user;
    }
  }, [user]);

  return <User.Provider value={value}>{children}</User.Provider>;
};

export const useFetchUser = () => {
  const [data, setUser] = useState({
    user: userState || null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userState !== undefined) {
      return;
    }

    let isMounted = true;

    const resolveUser = async () => {
      const user = await getUserFromLocalCookie();

      if (isMounted) {
        setUser({ user });
      }
      setLoading(false);
    };
    resolveUser();
  }, []);

  return {...data, loading};
};
