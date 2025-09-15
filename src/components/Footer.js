import React from "react";
import "./Footer.css";
import {
    FaPhone,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                Designed and Developed by Huynh Hai Duy
            </div>
            <div className="footer-center">
                © 2025 Huynh Hai Duy. All rights reserved.
            </div>
            <div className="footer-right">
                <a
                    href="tel:+84901234567"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <FaPhone />
                </a>
                <a
                    href="mailto:duy@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <FaEnvelope />
                </a>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <FaLinkedin />
                </a>
                <a
                    href="https://facebook.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <FaFacebook />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
