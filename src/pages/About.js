import dogsCats from "../assets/dogsCats.png";
import AboutBullets from "../components/AboutBullets";

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
          <AboutBullets />
        </div>
      </div>
    </>
  );
};

export default About;
