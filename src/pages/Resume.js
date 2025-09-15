import React from "react";
import "./Resume.css";

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/HuynhHaiDuy.pdf";
        link.download = "HuynhHaiDuy.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume-container">
            <button className="download-btn" onClick={handleDownload}>
                Download CV
            </button>

            <div className="pdf-viewer">
                <iframe
                    src="/HuynhHaiDuy.pdf"
                    title="CV Viewer"
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                ></iframe>
            </div>

            <button className="download-btn" onClick={handleDownload}>
                Download CV
            </button>
        </div>
    );
};

export default Resume;
