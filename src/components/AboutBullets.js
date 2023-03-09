import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
const AboutBullets = () => {
  const abouts = [
    {
      src: "https://assets5.lottiefiles.com/packages/lf20_mbt8vxzs.json",
      text: "התחברו דרך חשבון גוגל",
    },
    {
      src: "https://assets6.lottiefiles.com/packages/lf20_Rcmhi4qEVp.json",
      text: "השתמשו במנוע החיפוש שלנו למציאת חיית המחמד ושמרו במועדפים",
    },
    {
      src: "https://assets5.lottiefiles.com/packages/lf20_fH59p8KAj6.json",
      text: "בואו אלינו לאמץ! רחוב הגפן 12, גבעתיים",
    },
  ];
  return (
    <>
      {abouts.map((about) => {
        return (
          <div className="bullet-point">
            <Player
              key={about.text}
              autoplay
              loop
              src={about.src}
              style={{ height: "100px", width: "100px" }}
            ></Player>
            <p>{about.text}</p>
          </div>
        );
      })}
    </>
  );
};

export default AboutBullets;
