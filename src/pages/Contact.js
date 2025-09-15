import React from "react";
import "./Contact.css";
import {
    FaPhone,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-section">
            <h2>FIND ME ON</h2>
            <p>
                Feel free to <span className="purple">connect</span> with me
            </p>
            {/* <div className="social-icons">
                <FaPhone />
                <FaEnvelope />
                <FaGithub />
                <FaLinkedin />
                <FaFacebook />
            </div> */}

            <div className="social-icons">
                <a
                    href="tel:+84345656911"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <FaPhone />
                </a>
                <a
                    href="mailto:haiduysaigon@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <FaEnvelope />
                </a>
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/huynhhaiduy/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <FaLinkedin />
                </a>
                <a
                    href="https://www.facebook.com/share/17ArjvZkSU/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <FaFacebook />
                </a>
            </div>
        </div>
    );
};

export default Contact;
