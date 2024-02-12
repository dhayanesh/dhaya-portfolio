"use client";

import {motion} from "framer-motion";
import {slideInFromTop} from "@/utils/motion";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';

const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    margin: '10px 0',
};


const Experience = () => {
    return (
        <div id="experience" className="flex items-center justify-center min-h-screen w-full text-white p-4">
            <div className="mb-8">
                <motion.div
                    variants={slideInFromTop}
                    initial="hidden"
                    animate="visible"
                    className="text-[40px] font-medium text-center text-gray-200"
                >
                    Education{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        & 
                    </span> {" "}
                    Experience
                </motion.div>
            </div>


            <Timeline position="alternate">
                {/* Research Assistant */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="success">
                            <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div style={cardStyle}>
                            <Typography variant="h6" component="span"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Research Assistant </span></Typography>
                            <Typography>SUNY Research Foundation, New York (May 2023 – Present)</Typography>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                {/* Master of Science in Computer Science */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div style={cardStyle}>
                            <Typography variant="h6" component="span"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Master of Science in Computer Science</span></Typography>
                            <Typography>University at Buffalo (SUNY) (Aug 2022 - May 2024)</Typography>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                {/* Software Engineer - Full Stack */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="success">
                            <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div style={cardStyle}>
                            <Typography variant="h6" component="span"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Software Engineer</span></Typography>
                            <Typography>Newgen Software Technologies (September 2020 – August 2022)</Typography>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                {/* Software Engineer Intern */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="info">
                            <CodeIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div style={cardStyle}>
                            <Typography variant="h6" component="span"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Software Engineer Intern</span></Typography>
                            <Typography>Newgen Software Technologies (August 2020 – September 2020)</Typography>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                {/* Bachelor of Engineering in Computer Science */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <SchoolIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div style={cardStyle}>
                            <Typography variant="h6" component="span"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Bachelor of Engineering in Computer Science</span></Typography>
                            <Typography>Anna University (Aug 2016 - May 2020)</Typography>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

        </div>
    );
};

export default Experience;
