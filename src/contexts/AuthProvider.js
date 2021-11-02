import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
export const AuthContext = createContext();
// provide auth
const AuthProvider = ({ children }) => {
  const Allcontexts = useFirebase();
  return (
    <AuthContext.Provider value={Allcontexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
