import React from "react";
import "./About.css";
import {
    FaGamepad,
    FaPenFancy,
    FaPlane,
    FaCode,
    FaTools,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaDocker,
} from "react-icons/fa";
// import GitHubCalendar from "react-github-calendar";
import { DiVisualstudio } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiSolidity } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { DiRedis } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import about from "../assets/about.png";

const About = () => {
    return (
        <div className="about-container">
            <div className="intro-row">
                <div className="intro-text">
                    <h2>
                        Know Who <span className="purple">I'm</span>
                    </h2>
                    <div>
                        <p className="intro-paragraph">
                            Hi Everyone, I am <strong>Duy</strong> from Saigon,
                            Vietnam.
                        </p>
                        <p className="intro-paragraph">
                            I am currently employed as a Software Developer at
                            Forvia Hella.
                        </p>
                        <p className="intro-paragraph">
                            I completed my Bachelor of Information Technology
                            (BIT) majoring in Programming <br></br>at the
                            University of Information Technology and Management
                            in Rzeszow, Poland (UITM).
                        </p>
                    </div>
                    <br></br>
                    <p className="intro-paragraph">
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li>
                            <FaGamepad /> Playing Games
                        </li>
                        <li>
                            <FaPenFancy /> Writing Tech Blogs
                        </li>
                        <li>
                            <FaPlane /> Traveling
                        </li>
                    </ul>
                    <br></br>
                    <p>
                        <em>
                            "Strive to build things that make a difference!"
                        </em>
                    </p>
                    <p>
                        <strong>- Huynh Hai Duy</strong>
                    </p>
                </div>
                <div className="intro-photo">
                    <img src={about} alt="Haridi" className="profile-photo" />
                </div>
            </div>

            <div className="skills-section">
                <h2>
                    Professional <span className="purple">Skillset</span>
                </h2>
                <div className="card-grid">
                    <div className="card">C++</div>
                    <div className="card">
                        <IoLogoJavascript /> JavaScript
                    </div>
                    <div className="card">Go</div>
                    <div className="card">
                        <FaNode /> Node.js
                    </div>
                    <div className="card">
                        <FaReact /> React.js
                    </div>
                    <div className="card">
                        <SiSolidity /> Solidity
                    </div>
                    <div className="card">
                        <SiMongodb /> MongoDB
                    </div>
                    <div className="card">
                        <RiNextjsFill /> Next.js
                    </div>
                    <div className="card">
                        <FaGitAlt /> Git
                    </div>
                    <div className="card">
                        <IoLogoFirebase /> Firebase
                    </div>
                    <div className="card">
                        <DiRedis /> Redis
                    </div>
                    <div className="card">
                        <SiPostgresql /> Postgres
                    </div>
                    <div className="card">
                        <FaPython /> Python
                    </div>
                    <div className="card">
                        <FaJava /> Java
                    </div>
                </div>
            </div>

            <div className="tools-section">
                <h2>
                    <span className="purple">Tools</span> I use
                </h2>
                <div className="card-grid">
                    <div className="card">macOS</div>
                    <div className="card">
                        <DiVisualstudio /> VSCode
                    </div>
                    <div className="card">
                        <SiPostman /> Postman
                    </div>
                    <div className="card">
                        <FaSlack /> Slack
                    </div>
                    <div className="card">
                        <FaDocker /> Docker
                    </div>
                    <div className="card">
                        <FaFigma /> Figma
                    </div>
                </div>
            </div>

            {/* <div className="calendar-section">
                <h2>
                    Days I <span className="purple">Code</span>
                </h2>
                <GitHubCalendar username="soumyajit4419" />
            </div> */}
        </div>
    );
};

export default About;
