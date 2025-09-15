import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { VscVmRunning } from "react-icons/vsc";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         const snapshot = await getDocs(collection(db, "projects"));
    //         const data = snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             ...doc.data(),
    //         }));
    //         setProjects(data);
    //     };

    //     fetchProjects();
    // }, []);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const snapshot = await getDocs(collection(db, "projects"));
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false); // Stop loading after fetch
            }
        };

        fetchProjects();
    }, []);

    // if (loading) {
    //     return <div className="projects-section">Loading projects...</div>;
    // }

    if (loading) {
        return <div className="spinner"></div>;
    }

    return (
        <div className="projects-section">
            <h2>
                My Recent <span className="purple">Works</span>
            </h2>
            <p>Here are a few projects I've worked on recently.</p>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img
                            src={project.photo}
                            alt={project.name}
                            className="project-image"
                        />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="project-buttons">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn">
                                    <FaGithub /> GitHub
                                </button>
                            </a>
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn">
                                    <VscVmRunning /> Demo
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
