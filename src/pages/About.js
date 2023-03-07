import { Player } from "@lottiefiles/react-lottie-player";
import dogsCats from "../assets/dogsCats.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div>
          <h1>מי אנחנו</h1> <br></br>
          <h2>
            פטליפיי נולדה במטרה לעזור לך למצוא את חיית המחמד המושלמת לפי העדפתך.
          </h2>
          <p>
            אצלנו ניתן למצוא מגוון אפשרויות אימוץ לפי גזע החתול או הכלב וכך נוכל
            לצמצם ביחד את תעשיית מכירת חיות המחמד בישראל.
          </p>
          <p>ולך רק נשאר לבחור ולאמץ בחום! </p>
          <img src={dogsCats} alt="cats and dogs" />
        </div>
        <div className="about-bullets">
          <div className="bullet-point">
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_mbt8vxzs.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
            <p>התחברו דרך חשבון גוגל</p>
          </div>
          <div className="bullet-point">
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_Rcmhi4qEVp.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>

            <p>השתמשו במנוע החיפוש שלנו למציאת חיית המחמד ושמרו במועדפים</p>
          </div>
          <div className="bullet-point">
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_fH59p8KAj6.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>

            <p>בואו אלינו לאמץ! רחוב הגפן 12, גבעתיים</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
