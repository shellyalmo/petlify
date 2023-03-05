import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/black-logo.png";
import {
  signInWithGoogle,
  signOutWithGoogle,
} from "../../firebase_setup/googleAuth";

import { user } from "../../firebase_setup/googleAuth";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        {user ? (
          <button onClick={signOutWithGoogle}>התנתקות</button>
        ) : (
          <FcGoogle onClick={signInWithGoogle} />
        )}

        <h1 className="logo">
          <Link to="/">
            פטליפיי
            <img src={logo} alt="petlify logo" />
          </Link>
        </h1>

        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              בית
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              מי אנחנו
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pets"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              החיות שלנו
            </NavLink>
          </li>
          {user && (
            <li>
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
      </div>
    </nav>
  );
};

export default Navbar;
