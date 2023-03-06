import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/black-logo.png";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

import { FcGoogle } from "react-icons/fc";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [loggedIn, user, signIn, signOut] = useLogin();

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="navbar bg-dark">
      <div className="container">
        {loggedIn ? (
          <>
            <button onClick={signOut}>התנתקות</button>
            <p>שלום , {user.email}</p>
          </>
        ) : (
          <p onClick={signIn}>
            <FcGoogle /> <span></span> התחברות דרך גוגל
          </p>
        )}

        <h1 className="logo">
          <Link to="/">
            פטליפיי
            <img src={logo} alt="petlify logo" />
          </Link>
        </h1>

        <ul className={hamburgerOpen ? "small-screen-menu" : "big-screen-menu"}>
          <li
            className={!hamburgerOpen ? "big-screen-menu" : "small-screen-menu"}
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              בית
            </NavLink>
          </li>
          <li
            className={!hamburgerOpen ? "big-screen-menu" : "small-screen-menu"}
          >
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              מי אנחנו
            </NavLink>
          </li>
          <li
            className={!hamburgerOpen ? "big-screen-menu" : "small-screen-menu"}
          >
            <NavLink
              to="/pets"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              החיות שלנו
            </NavLink>
          </li>
          {loggedIn && (
            <li
              className={
                !hamburgerOpen ? "big-screen-menu" : "small-screen-menu"
              }
            >
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                המועדפים שלך
              </NavLink>
            </li>
          )}
        </ul>
        <div
          className={`hidden-hamburger ${
            hamburgerOpen ? "hamburger-open" : ""
          }`}
          onClick={toggleHamburger}
        >
          <HamburgerMenu hamburgerOpen={hamburgerOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
