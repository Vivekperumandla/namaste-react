import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const { logggedInUser } = useContext(userContext);
  // console.log(logggedInUser);
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-orange-200 shadow-md">
      <div className="logo-container">
        <Link to="/">
          <img className="w-32" src={LOGO_URL} alt="Namaste Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
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
          {isLoggedin ? (
            <li className="px-4 font-bold">{logggedInUser}</li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
