import React from "react";

const Navbar = () => {
    return (
        <>
            <style>
                {`
                .nav-link:hover {
                    text-shadow: 
                        0 0 5px #ffffff, 
                        0 0 10px #ffffff, 
                        0 0 15px #e60073, 
                        0 0 20px #e60073, 
                        0 0 25px #e60073, 
                        0 0 30px #e60073, 
                        0 0 35px #e60073;
                    transition: text-shadow 0.3s ease;
                }
                `}
            </style>
            <div className="w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10">
                <div className="flex h-full items-center justify-center m-auto">
                    <div className="flex items-center justify-center h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about-me" className="cursor-pointer mx-6 nav-link">
                            About
                        </a>
                        <a href="#skills" className="cursor-pointer mx-6 nav-link">
                            Skills
                        </a>
                        <a href="#experience" className="cursor-pointer mx-6 nav-link">
                            Experience
                        </a>
                        <a href="#resume" className="cursor-pointer mx-6 nav-link">
                            Resume
                        </a>
                        <a href="#projects" className="cursor-pointer mx-6 nav-link">
                            Projects
                        </a>
                        <a href="#contact" className="cursor-pointer mx-6 nav-link">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
