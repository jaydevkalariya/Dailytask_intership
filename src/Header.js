import React from "react";
import  "./Navbar.css";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="navbar">
                <ul className="navbar-lists">
                    <li>
                        <NavLink
                            to="/"
                            className="navbar-link ">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="navbar-link "
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="navbar-link "
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/materialUi"
                            className="navbar-link "
                        >
                            MaterialUi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/materialUi2"
                            className="navbar-link "
                        >
                            MaterialUi2
                        </NavLink>
                    </li>
                </ul>


            </div>
        </>
    )
}
export default Header;