import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //   google Login
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  //   email sign up
  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign Out
  const logOut = () => {
    signOut(auth)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  //   manage user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  const authInfo = { googleLogin, emailSignUp, logOut, user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
