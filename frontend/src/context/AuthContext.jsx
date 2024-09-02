import React,{ createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../sevices/authServices";

export const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContextProvider);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const response = await getUser();
      console.log('user in context :>> ', response);
      setUser(response);
    } catch (error) {
      console.log("error in get user:>> ", error);
    }
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
