import { useState } from "react";
import {
  signInWithGoogle,
  signOutWithGoogle,
} from "../firebase_setup/googleAuth";
const useLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  async function signIn() {
    const response = await signInWithGoogle();
    setUser(response);
    setLoggedIn(true);
  }

  async function signOut() {
    const response = await signOutWithGoogle();
    setUser(null);
    setLoggedIn(false);
  }

  return [loggedIn, user, signIn, signOut];
};

export default useLogin;
