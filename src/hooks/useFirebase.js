import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebaseInitialize from "../Firebase/firebase.init";
firebaseInitialize();
// useFirebase to use

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  // google signin
  const siginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // get currently signin user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  // logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return { siginWithGoogle, user, error, logout, setUser, setError, loading };
};

export default useFirebase;
