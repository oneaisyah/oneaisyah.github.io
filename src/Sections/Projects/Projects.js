import React from "react";
import ProjectCard from "./ProjectCard";
import jkoin from "../../images/jkoin.png";
import voluntr from "../../images/voluntr.png";
import ims from "../../images/invoicemanagementsystem.png";
import avalanche from "../../images/avalanche.png";
import construction from "../../images/construction.png";

function Projects() {
    const projects = [
        {
            title: "Predictive Maintenance System",
            description: "An advanced predictive maintenance system designed to monitor and anticipate equipment failures, ensuring timely maintenance actions to reduce downtime and improve operational efficiency.",
            image: construction,
            current: true,
            techstack: [
                "Python",
                "TensorFlow",
                "Django",
                "TypeScript",
                "React"
            ]
        },
        {
            title: "Decentralized Crowdfunding Platform",
            description: "A blockchain-based decentralized crowdfunding platform aimed at supporting sustainability projects. This platform enables transparent, secure, and peer-to-peer funding for eco-friendly initiatives.",
            image: jkoin,
            techstack: [
                "Solidity",
                "JavaScript",
                "React",
                "IPFS"
            ]
        },
        {
            title: "Invoice Management System",
            description: "A web-based application that streamlines the invoicing process, allowing businesses to automate, track, and manage invoices with ease.",
            image: ims,
            techstack: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Google Document AI"
            ]
        },
        {
            title: "Voluntr",
            description: "An android application inspired by the design of Tinder, connecting organizations with passionate volunteers to help drive positive social impact through seamless interactions.",
            image: voluntr,
            techstack: [
                "Java",
                "Firebase",
            ]
        },
        {
            title: "Sled Racing Game",
            description: "A physical single-player sled racing game where players navigate through a dynamic and interactive environment with hardware and electronics.",
            image: avalanche,
            techstack: [
                "FPGA",
                "Alchitry",
            ]
        }
    ];
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem"
            }}
        >
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}

export default Projects;