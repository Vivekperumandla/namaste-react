import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="Namaste Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
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
