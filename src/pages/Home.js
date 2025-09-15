import React from "react";
import "./Home.css";
import {
    FaPhone,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";
import huynhhaiduy from "../assets/huynhhaiduy.jpeg";

const Home = () => {
    return (
        <div className="home-container">
            <div className="top-row">
                <div className="greeting-text">
                    <h1>
                        Hi There!{" "}
                        <span
                            className="wave"
                            role="img"
                            aria-labelledby="wave"
                        >
                            👋🏻
                        </span>
                    </h1>
                    <h2>
                        I'M <span className="purple">DUY</span>
                    </h2>
                </div>
                <div className="photo-container">
                    <img
                        // src="/huynhhaiduy.jpeg"
                        src={huynhhaiduy}
                        alt="Haridi"
                        className="profile-photo"
                    />
                </div>
            </div>

            <div className="intro-section">
                <h2>
                    LET ME <span className="purple">INTRODUCE</span> MYSELF
                </h2>
                <p>
                    I fell in love with programming and I have at least learned
                    something, I think… 🤷‍♂️
                </p>
                <p>
                    I am fluent in classics like{" "}
                    <span className="purple italic">
                        C++, Javascript and Go
                    </span>
                    .
                </p>
                <p>
                    My field of Interest's are building new{" "}
                    <span className="purple italic">
                        Web Technologies and Products
                    </span>{" "}
                    and also in areas related to{" "}
                    <span className="purple italic">Blockchain</span>.
                </p>
                <p>
                    Whenever possible, I also apply my passion for developing
                    products with <span className="purple italic">Node.js</span>{" "}
                    and{" "}
                    <span className="purple italic">
                        Modern Javascript Library and Frameworks
                    </span>{" "}
                    like{" "}
                    <span className="purple italic">React.js and Next.js</span>.
                </p>
            </div>

            <div className="contact-section">
                <h2>FIND ME ON</h2>
                <p>
                    Feel free to <span className="purple">connect</span> with me
                </p>
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
        </div>
    );
};

export default Home;
