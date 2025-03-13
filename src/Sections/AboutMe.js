import React from "react";
import TechStack from "./TechStack";

function AboutMe() {
    const languages = [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "Solidity",
    ];

    const cyberTechStack = [
        "Linux",
        "SIEM Tools",
        "Suricata",
    ];

    const webTechStack = [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
        "Firebase",
    ];

    return (
        <div>
            <h1>About Me</h1>
            <div className="tech-stack-section">
                <div className="tech-stack-container">
                    {languages.map((lang, index) => (
                        <TechStack key={index} tech={lang} />
                    ))}
                </div>
                <div className="tech-stack-container">
                    {cyberTechStack.map((tech, index) => (
                        <TechStack key={index} tech={tech} />
                    ))}                
                </div>
                <div className="tech-stack-container">
                    {webTechStack.map((tech, index) => (
                        <TechStack key={index} tech={tech} />
                    ))}
                </div>
            </div>
            <div className="paragraph">
                <h3>
                    I'm Aisyah, a final-year Computer Science student at Singapore University of Technology & Design (SUTD). I'm passionate about cybersecurity and software development. I have experience in developing web applications and smart contracts. I'm also familiar with various cybersecurity tools and techniques and hold the Google Cybersecurity Certificate.
                </h3>
            </div>
        </div>
    );
}

export default AboutMe;