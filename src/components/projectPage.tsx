import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../css/global.css'
import Navbar from "./navbar";
import type { Crumb } from "./navbar";
import CenteredProjectTitle from "./centredProjectTitle";
import AvatarPortrait from "./avatarPortrait";
import Button from "./button";
import Paragraph from "./paragraph";
import Footer from "./footer";
import TechnologyIcon from "./technologyIcon";
import Gallery from "./gallery";
import technologies from "../json/technologies.json"

interface ProjectPageProps {
    projectName: string;
    technologiesUsed: string[];

    description: string;
    caseStudy: string;
    experience: string;

    galleryImages: string[];

    logoUrl: string;
    openUrl: string;
    moreUrl: string;
    repositoryUrl: string;

    navCrumbs: Crumb[],
    currentPage: string,

    nextProject: Crumb,
    previousProject: Crumb

}

interface TechnologyItem {
    name: string;
    logoUrl: string;
    websiteUrl: string;

}

const generateTechnologies = (techsList: string[], techsJsonObject: TechnologyItem[]) =>
    techsList.map((techName: string) => {
        const matchedTech = techsJsonObject.filter((techObj) => (techName.toLowerCase() == techObj.name.toLowerCase()));

        if (matchedTech.length > 0)
            return (<TechnologyIcon src={matchedTech[0].logoUrl} link={matchedTech[0].websiteUrl} alt={techName}></TechnologyIcon>);
        return null;
    }

    );

const getNextAndPrevIndexes = (currentIndex: number, itemsLength: number) => {

    const initialIndex: number = 0;

    if (currentIndex > itemsLength)
        return ;
    if (itemsLength == 1)
        return {
            prev: initialIndex,
            next: initialIndex
        };
    else if ((itemsLength -1) == currentIndex)
        return {
            prev: (currentIndex - 1), //prev item
            next: (initialIndex )
        }
    else if (itemsLength > initialIndex)
        return {
            prev: ((currentIndex - 1) >= 0 ? (currentIndex - 1) : 0),
            next: (((currentIndex + 1) >= itemsLength) ? initialIndex : currentIndex + 1), // jump to the start when its at the last item
        }

};


const ProjectPage = ({ projectName, technologiesUsed, description, caseStudy, experience, galleryImages, logoUrl, openUrl, repositoryUrl, navCrumbs, currentPage, previousProject, nextProject }: ProjectPageProps) => {
    return (<div>
        <Navbar links={navCrumbs} currentPage={currentPage} ></Navbar>
        <div className="p-2 bg-pattern-te m-4 rounded-24 shadow-lg">
            <CenteredProjectTitle title={projectName} nextPage={nextProject} previousPage={previousProject} ></CenteredProjectTitle>

            <div className="flex flex-wrap justify-evenly">
                <AvatarPortrait
                    imageUrl={logoUrl}
                    orientation="square"
                    border={false}
                />
                <div className="">
                    <div className="mt-4"></div>
                    <div className="text-xl">
                        <Paragraph text={description} />
                    </div>
                    <div className="mt-10"></div>

                    <Button text="Github repository" link={repositoryUrl} size={"large"} background="black" />
                    <div className="mt-4"></div>
                    <Button text="open" link={openUrl} size={"large"} />

                </div>
            </div>
            <div className=" mt-16">
                <hr className="border-grey my-4" />
                <Gallery imageUrls={galleryImages}></Gallery>
                <hr className="border-grey my-4" />
            </div>

            <div className="mx-4 my-16 flex flex-wrap justify-center px-4">
                {generateTechnologies(technologiesUsed, technologies)}
            </div>
            <div className="cloud-white border-2 border-grey rounded-24 p-4 flex flex-col flex-wrap justify-between mb-6 w-fit mx-auto">
                <div className="flex flex-wrap justify-evenly">
                    <Paragraph text={caseStudy}></Paragraph>
                    <Paragraph text={experience}></Paragraph>
                </div>
                <hr className="border-grey my-2" />
                <div className="flex place-items-center font-bold">

                    <a href={openUrl} className="flex place-items-center py-2 pl-3 pr-4 primary-text rounded-24 dark-green-text font-site-mono hover:underline">
                        <svg className="h-5 w-5 inline-flex" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M16 7.38A7.82 7.82 0 0 0 8 .5a7.82 7.82 0 0 0-8 6.88v1.24a7.82 7.82 0 0 0 8 6.88a7.82 7.82 0 0 0 8-6.88V7.38zm-1.25 0h-3a11.34 11.34 0 0 0-.43-2.54a7.6 7.6 0 0 0 1.75-1a6 6 0 0 1 1.65 3.54zm-9.18 0a9.69 9.69 0 0 1 .37-2.14A8.43 8.43 0 0 0 8 5.5a8.49 8.49 0 0 0 2.09-.26a10.2 10.2 0 0 1 .37 2.14zm4.92 1.24a9.59 9.59 0 0 1-.37 2.14a8.53 8.53 0 0 0-4.18 0a9.69 9.69 0 0 1-.37-2.14zm.4-5A11.82 11.82 0 0 0 10 2a6.89 6.89 0 0 1 2 1a6.57 6.57 0 0 1-1.14.66zm-2.6-1.86a10 10 0 0 1 1.38 2.3A7.63 7.63 0 0 1 8 4.25a7.56 7.56 0 0 1-1.67-.19a9.82 9.82 0 0 1 1.38-2.3h.58zm-3.15 1.9A6.57 6.57 0 0 1 4 3a6.89 6.89 0 0 1 2-1a10.38 10.38 0 0 0-.86 1.66zM3 3.83a7.6 7.6 0 0 0 1.75 1a11 11 0 0 0-.43 2.54h-3A6 6 0 0 1 3 3.83zM1.28 8.62h3a11 11 0 0 0 .43 2.54a7.6 7.6 0 0 0-1.75 1a6 6 0 0 1-1.68-3.54zm3.86 3.72A10.38 10.38 0 0 0 6 14a6.89 6.89 0 0 1-2-1a6.57 6.57 0 0 1 1.14-.66zm2.57 1.9a9.82 9.82 0 0 1-1.38-2.3a7.43 7.43 0 0 1 3.34 0a9.76 9.76 0 0 1-1.38 2.3h-.58zm3.15-1.9a6.57 6.57 0 0 1 1.19.66a7.24 7.24 0 0 1-2 1a11.48 11.48 0 0 0 .81-1.66zm2.14-.17a7.6 7.6 0 0 0-1.75-1a10.8 10.8 0 0 0 .43-2.54h3A6 6 0 0 1 13 12.17z" /></svg>&nbsp;Visit demo&nbsp;</a> |
                    <a href={repositoryUrl} className="flex place-items-center py-2 pl-3 pr-4 primary-text rounded-24 dark-green-text font-site-mono hover:underline">
                        <svg className="h-5 w-5 inline-flex" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="m9.539.613l-3.9 14.55l1.209.324L10.746.937L9.54.612zm-5.63 3.434L.598 7.137a1.24 1.24 0 0 0 0 1.821l3.25 3.091l.921-.85l-3.321-3.15l3.321-3.112l-.86-.89zm11.893 3.091l-3.31-3.091l-.861.91l3.32 3.091l-3.32 3.111l.92.85l3.251-3.05a1.242 1.242 0 0 0 0-1.821z" /></svg>
                        &nbsp;
                        View code&nbsp;</a>

                </div>
                <div className="mb-4"></div>
            </div>
            <CenteredProjectTitle title="" nextPage={nextProject} previousPage={previousProject} ></CenteredProjectTitle>
        </div>
        <Footer></Footer>

    </div>);
};

export default ProjectPage;
export { Crumb, getNextAndPrevIndexes };