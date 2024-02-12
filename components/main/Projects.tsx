import React from "react";
import ProjectCard from "../sub/ProjectCard";
import '../../app/globals.css';

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20" id="projects">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Projects
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 px-10 mb-10">
                <a href="https://github.com/dhayanesh/nlp-linkedIn">
                    <ProjectCard src="/linkedin.jpg" title="LinkedIn Post Generation LLM" description="Scraped LinkedIn posts, preprocessed, fine-tuned language model for LinkedIn style, developed simple text generation UI, evaluated outputs to mimic LinkedIn writing style." /> 
                </a>
                <a href="https://github.com/dhayanesh/dlrm-meta">
                    <ProjectCard src="/meta.jpg" title="DLRM Checkpointing System" description="Collaborated with Meta Inc to develop a novel continuous checkpoint system for enhanced fault tolerance and quick recovery from system crashes during DLRM model training." />
                </a>
                <a href="https://github.com/dhayanesh/dataFlow">
                    <ProjectCard src="/dic.png" title="DataFlow" description="A full-stack web solution for diabetes data processing with advanced ML models, flexible dataset ingestion mechanism,  data cleaning and EDA pipeline for enhanced decision making accuracy." />
                </a>
                <a href="https://github.com/dhayanesh/iFixer-Project">
                    <ProjectCard src="/isr.jpg" title="iFixer" description="Enhanced text recognition with deep learning-based motion de-blurring, and Image Super Resolution for improved image clarity, increasing OCR reliability under challenging conditions." />
                </a>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 px-10">
                <div></div>
                <a href="https://github.com/dhayanesh/NodeJS-Chat-App">
                <ProjectCard src="/chatapp.jpg" title="Text chat Application" description="Developed a real-time messaging application featuring user authentication, responsive interface, data storage via MongoDB, and instant group chat functionalities." />
                </a>
                <a href="https://github.com/dhayanesh?tab=repositories">
                <ProjectCard src="/github.png" title="My Github Repo" description="This GitHub repository is a comprehensive collection of my projects works in algorithms, software development and machine learning, demonstrating advanced technical skills." />
                </a>
                <div></div>
            </div>
        </div>
    );
};

export default Projects;
