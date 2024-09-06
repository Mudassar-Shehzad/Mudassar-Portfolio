import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {FaTimes} from 'react-icons/fa'
function ProjectsDetails() {
    const { state } = useLocation();
    const { title, description, ghLink, demoLink, imgPath, tools } = state;

    // Hardcoded tools and languages
    // const tools = ["React", "Tailwind CSS",];

    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20 flex flex-col md:flex-row">
            <Link to='/project' className="absolute top-[6.2rem] h-10 w-10 right-10 text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full" >
            <FaTimes size={20}/>
            </Link>
            <div className="w-full  p-6 overflow-y-auto flex flex-col space-y-4 text-left">
                <div className="">
                    <h2 className="text-2xl font-bold mb-2">Sources</h2>
                    <p className="mb-2">
                        {tools.join(', ')}
                    </p>
                    <div className="mt-4 flex flex-col space-y-2">
                        <div className="flex space-x-2 items-center content-center" >
                                <BsGithub className="" size={20} /> GitHub

                            <a
                                href={ghLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-blue-400 hover:text-blue-300"
                            >
                                {ghLink}
                            </a>
                        </div>
                        {demoLink && (
                        <div className="flex space-x-2 items-center content-center" >
                                    <CgWebsite className="" size={20} /> Demo
                                <a
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-400 hover:text-blue-300"
                                >

                                    {demoLink}
                                </a>
                                </div>
                        )}
                    </div>
                </div>
                <h1 className="text-3xl font-bold mt-4 mb-2">Description</h1>
                <p className="text-lg">{description}</p>
            </div>
            {/* <div className="w-full md:w-1/2 p-6 flex justify-center">
                <img src={imgPath} alt={title} className="w-full h-[60vh] rounded-lg shadow-lg" />
            </div> */}
        </div>
    );
}

export default ProjectsDetails;
