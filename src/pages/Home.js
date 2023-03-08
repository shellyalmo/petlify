import catDogVideo from "../assets/catdog-video.mp4";
import Pets from "./Pets";

const Home = () => {
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
      </div>
      <Pets />
    </>
  );
};

export default Home;
