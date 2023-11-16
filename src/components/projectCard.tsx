import * as React from "react"
import '../css/global.css'
import Paragraph from "./paragraph";
import Button from "./button";

interface ProjectCardProps {

    platform: string;
    type: string;

    name: string;
    technologies: string[];
    description: string;

    logoUrl?: string;
    imgUrl?: string;
    alt?: string;

    openUrl? : string;
    moreUrl?: string;

    
}

const ProjectCard = ({ platform,
    type,
    name,
    technologies,
    description,
    imgUrl,
    logoUrl,
    openUrl="#",
    moreUrl="#",
        alt = "project-image" }: ProjectCardProps) => {

    return (
        <div className="m-3 rounded-24 border border-grey py-4 cloud-white shadow-md">
            <div className="flex flex-wrap mb-4 px-4">
                <img src={logoUrl} alt={"logo"} width={"48"} height={"48"} className="mr-4" />
                <div className="">
                    <span className="text-lg capitalize font-site-sans">{type}</span>
                    <br />
                    <span className="text-md font-site-sans">{platform}</span>
                </div>
            </div>
            <div className="mb-1">
                <img src={imgUrl} alt={alt} className="mr-2 card-image" />
            </div>
            <div className="mb-2 px-4">
                <span className="text-lg capitalize font-bold font-site-serif">{name}</span>
                <br />
                <span className="text-md font-site-serif">{technologies.join(", ")}</span>
            </div>
            <div className="mb-2 px-4">
                <Paragraph text={description} />
            </div>

            <div className="px-4 flex justify-end">
                <Button text="open" link={openUrl}/>
                <div className="mx-2"></div>
                <Button text="more"  background="black" link={moreUrl}/>
            </div>
        </div>
    );

};

export default ProjectCard;

