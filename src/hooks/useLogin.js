import { useEffect, useState } from "react";
import {
  signInWithGoogle,
  signOutWithGoogle,
} from "../firebase_setup/googleAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
const useLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoggedIn(u !== null);
    });
    return unsubscribe;
  }, []);

  async function signIn() {
    const response = await signInWithGoogle();
    setUser(response);
    setLoggedIn(true);
  }

  async function signOut() {
    await signOutWithGoogle();
    setUser(null);
    setLoggedIn(false);
  }

  return [loggedIn, user, signIn, signOut];
};

export default useLogin;
