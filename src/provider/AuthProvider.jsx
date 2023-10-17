import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  //   google Login
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  const authInfo = { googleLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
