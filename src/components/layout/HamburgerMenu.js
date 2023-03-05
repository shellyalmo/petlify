import React from "react";

const HamburgerMenu = ({ hamburgerOpen }) => {
  return (
    <>
      <div className="hamburger">
        <div
          className="burger"
          style={{ transform: hamburgerOpen ? "rotate(45deg)" : "rotate(0)" }}
        />
        <div
          className="burger"
          style={{
            transform: hamburgerOpen ? "translateX(100%)" : "translateX(0)",
            opacity: hamburgerOpen ? 0 : 1,
          }}
        />
        <div
          className="burger"
          style={{ transform: hamburgerOpen ? "rotate(-45deg)" : "rotate(0)" }}
        />
      </div>
    </>
  );
};

export default HamburgerMenu;
