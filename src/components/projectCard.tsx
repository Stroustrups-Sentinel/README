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
        <div className="m-3 rounded-24 border border-grey p-1">
            <div className="flex mb-1">
                <img src={logoUrl} alt={"logo"} width={"5rem"} height={"5rem"} className="mr-2" />
                <div className="flex grid-rows-2">
                    <span className="text-lg font-site-sans">{type}</span>
                    <span className="text-md font-site-sans">{platform}</span>
                </div>
            </div>
            <div className="mb-1">
                <img src={imgUrl} alt={alt} width={"5rem"} height={"5rem"} className="mr-2" />
            </div>
            <div className="mb-2">
                <span className="text-lg font-bold font-site-serif">{name}</span>
                <span className="text-md font-site-serif">{technologies}</span>
            </div>
            <div className="mb-2">
                <Paragraph text={description} />
            </div>

            <div className="flex justify-end">
                <Button text="open" link={openUrl}/>
                <Button text="more"  background="black" link={moreUrl}/>
            </div>
        </div>
    );

};

export default ProjectCard;

