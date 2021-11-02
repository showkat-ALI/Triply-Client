import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
// Use authentication
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
