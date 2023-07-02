import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Namaste Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          {isLoggedin ? (
            <button
              className="login_button"
              onClick={() => setIsLoggedin(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className="login_button"
              onClick={() => setIsLoggedin(true)}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
