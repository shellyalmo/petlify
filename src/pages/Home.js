import catDogVideo from "../assets/catdog-video.mp4";
import { signInWithGoogle } from "../firebase_setup/googleAuth";

const Home = () => (
  <>
    {/* <Search />
    <Users /> */}
    <video src={catDogVideo} muted loop autoPlay></video>
    <div className="overlay">
      <h2>כלבים וחתולים גזעיים לאימוץ מיידי ללא תשלום.</h2>
      <p>
        תוכלו למצוא במקלט שלנו מגוון גזעים יפהפיים שרק מחכים למצוא בית חם.
        <br />
        אז למה לקנות כשאפשר לאמץ?
      </p>
      <button className=" btn btn-light" onClick={signInWithGoogle}>
        הירשמו אלינו!
      </button>
    </div>
  </>
);

export default Home;
