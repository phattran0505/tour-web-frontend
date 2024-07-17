import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useRef, useContext } from "react";
import {Button} from "reactstrap"
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/images/logo.png";

import "./Header.css";
function Header() {
  const headerRef = useRef(null);
  const { user, dispatch } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    stickyHeader();
    return window.removeEventListener("scroll", stickyHeader);
  });
  return (
    <header className="header " ref={headerRef}>
      <nav className="nav_wrapper">
        {/*============ logo ===========*/}
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="no-logo"></img>
          </Link>
        </div>
        {/*============ menu start ===========*/}
        <div className="navigation">
          <ul className="links">
            <NavLink
              className={(navClass) => (navClass.isActive ? "active" : "")}
              to="/home"
            >
              home  
            </NavLink>
            <NavLink
              className={(navClass) => (navClass.isActive ? "active" : "")}
              to="/about"
            >
              about
            </NavLink>
            <NavLink
              className={(navClass) => (navClass.isActive ? "active" : "")}
              to="/tours"
            >
              tour
            </NavLink>
          </ul>
        </div>
        {/*=========== menu end =========*/}
        <div className="menu ">
          <div className="buttons d-flex align-items-center">
            {user ? (
              <>
                <h5>{user.username}</h5>
                <Button className="btn btn-dark" type="submit" onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </button>
                <button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </button>
              </>
            )}
          </div>
          <div className="mobile-menu">
            <IoIosMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
