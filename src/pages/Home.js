import catDogVideo from "../assets/catdog-video.mp4";
import GoogleButton from "react-google-button";
import { signInWithGoogle } from "../firebase_setup/googleAuth";
import useLogin from "../hooks/useLogin";

const Home = () => {
  const [loggedIn] = useLogin();

  return (
    <>
      <video src={catDogVideo} muted loop autoPlay></video>
      <div className="overlay">
        <h2>כלבים וחתולים גזעיים לאימוץ מיידי ללא תשלום.</h2>
        <p>
          תוכלו למצוא במקלט שלנו מגוון גזעים יפהפיים שרק מחכים למצוא בית חם.
          <br />
          אז למה לקנות כשאפשר לאמץ?
        </p>
        {loggedIn && (
          <GoogleButton
            label="התחברות לחשבון"
            onClick={signInWithGoogle}
          ></GoogleButton>
        )}
      </div>
    </>
  );
};

export default Home;
