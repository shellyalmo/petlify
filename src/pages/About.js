import dogsCats from "../assets/dogsCats.png";

const About = () => {
  return (
    <>
      <div className="about">
        <h2>מי אנחנו</h2>
        <p>
          פטליפיי נולדה במטרה לעזור לך למצוא את חיית המחמד המושלמת לפי העדפתך.
          המשימה שלנו היא להציע לך מגוון אפשרויות אימוץ לפי גזע החתול או הכלב
          וכך נוכל לצמצם ביחד את תעשיית הרבעת חיות המחמד בישראל. ולך רק נשאר
          לבחור ולאמץ בחום!{" "}
        </p>
        <img src={dogsCats} alt="cats and dogs" />
      </div>
    </>
  );
};

export default About;
