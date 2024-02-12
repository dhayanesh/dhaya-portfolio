import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="contact" className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <a href="https://github.com/yourGithubUsername" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <a href="https://www.linkedin.com/in/yourLinkedinUsername" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaEnvelope/>
                            <a href="mailto:dhayanes@buffalo.edu" className="text-[15px] ml-[6px]">dhayanes@buffalo.edu</a>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Made with &#x2764;&#xFE0F; by Dhaya
                </div>

            </div>
        </div>
    );
}

export default Footer;
