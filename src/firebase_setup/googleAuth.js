import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();
auth.languageCode = "he";

// export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    const user = result.user;
    return user;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log({ errorCode, errorMessage, email, credential });
  }
};

export const signOutWithGoogle = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
