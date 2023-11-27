import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../../css/global.css'
import Navbar from "../../components/navbar";
import CenteredTitle from "../../components/centeredTitle";
import ProjectPage from "../../components/projectPage";
import projects from "../../json/projects.json"

const project = projects[1];

const allImageUrls:string[] = [project.bannerUrl,...project.imageUrls,];

const PortfolioPage: React.FC<PageProps> = () => {
    return (
        <>
            <ProjectPage 
            projectName={project.name}
            technologiesUsed={project.technologies}
            description={project.description}
            caseStudy={project.caseStudy}
            experience={project.experience}
            galleryImages={allImageUrls}
            logoUrl={project.logoUrl}
            moreUrl={project.moreUrl}
            openUrl={project.openUrl}
            repositoryUrl={project.repositoryUrl}
            
            ></ProjectPage>
        </>
    );
}

export default PortfolioPage

export const Head: HeadFC = () => <> <title>Project | Accommo-Venient</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" />
    <link rel="icon" href="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/main/design/favicon.ico" />
</>
