import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

import { IoHomeOutline, IoLogInOutline } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { CiLogin, CiLogout } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ currentUser, setCurrentUser, isAdmin }) => {
    const { darkMode, toggleTheme } = useTheme();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        setCurrentUser(null);
        navigate("/login");
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const navLinks = (
        <>
            <Link
                to="/"
                className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                }`}
                onClick={closeMenu}
            >
                <IoHomeOutline /> Home
            </Link>
            <Link
                to="/about"
                className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                }`}
                onClick={closeMenu}
            >
                <CiUser /> About Me
            </Link>
            <Link
                to="/projects"
                className={`nav-link ${
                    location.pathname === "/projects" ? "active" : ""
                }`}
                onClick={closeMenu}
            >
                <AiOutlineFundProjectionScreen /> Projects
            </Link>
            <Link
                to="/blog"
                className={`nav-link ${
                    location.pathname === "/blog" ? "active" : ""
                }`}
                onClick={closeMenu}
            >
                <ImBlog /> Blog
            </Link>
            <Link
                to="/resume"
                className={`nav-link ${
                    location.pathname === "/resume" ? "active" : ""
                }`}
                onClick={closeMenu}
            >
                <IoDocumentTextOutline /> Resume
            </Link>
            <Link
                to="/contact"
                className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                }`}
                onClick={closeMenu}
            >
                <MdOutlineContactPhone /> Contact
            </Link>
            {/* <Link
                to="/login"
                className={`nav-link ${
                    location.pathname === "/login" ? "active" : ""
                }`}
                onClick={closeMenu}
            >
                <CiLogin /> Login
            </Link> */}
            {isAdmin && (
                <Link
                    to="/admin"
                    className={`nav-link ${
                        location.pathname === "/admin" ? "active" : ""
                    }`}
                    onClick={closeMenu}
                >
                    <MdAdminPanelSettings /> Admin
                </Link>
            )}
            {currentUser ? (
                <span
                    className={`nav-link ${
                        location.pathname === "/login" ? "active" : ""
                    }`}
                    onClick={() => {
                        handleLogout();
                        closeMenu();
                    }}
                    style={{ cursor: "pointer" }}
                >
                    <CiLogout /> Logout
                </span>
            ) : (
                <Link
                    to="/login"
                    className={`nav-link ${
                        location.pathname === "/login" ? "active" : ""
                    }`}
                    onClick={closeMenu}
                >
                    <CiLogin /> Login
                </Link>
            )}

            <button onClick={toggleTheme} className="theme-toggle">
                {darkMode ? "🌙" : "☀️"}
            </button>
        </>
    );

    return (
        <header className="navbar">
            <div className="navbar-left">
                <button className="menu-icon" onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </button>
                <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
                    {navLinks}
                </nav>
            </div>
            <div className="navbar-right">
                <span className="logo">HUYNH HAI DUY</span>
            </div>
        </header>
    );
};

export default Navbar;
