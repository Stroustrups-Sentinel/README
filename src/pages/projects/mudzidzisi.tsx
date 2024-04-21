import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../../css/global.css'
import ProjectPage, { Crumb, getNextAndPrevIndexes, getSiteUrl } from "../../components/projectPage";
import projects from "../../json/projects.json"

const projectIndex: number = 3; //number from the bottom of the list in the `projects.json` file
const projectPosition: number = projects.length - projectIndex;
const project = projects[projectPosition];

const allImageUrls: string[] = [/**project.bannerUrl,*/ ...project.imageUrls,];

const siteUrl: string = getSiteUrl();

const pageCrumbs: Crumb[] = [{ title: "Projects", url: siteUrl + "#projects" }];
const currentPage: string = project.title;

const pageIndexes = getNextAndPrevIndexes(projectPosition, projects.length) ?? { prev: 0, next: 0 };

const PocketDocPage: React.FC<PageProps> = () => {
    return (
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
                navCrumbs={pageCrumbs}
                currentPage={currentPage}


                previousProject={{ title: projects[pageIndexes?.prev ?? 0].title, url: siteUrl + projects[pageIndexes?.prev ?? 0].moreUrl }}
                nextProject={{ title: projects[pageIndexes?.next ?? 0].title, url: siteUrl + projects[pageIndexes?.next ?? 0].moreUrl }}

            ></ProjectPage>
    );
}

export default PocketDocPage

export const Head: HeadFC = () => <> <title>Project | {project.title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" />
    <link rel="icon" href="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/main/design/favicon.ico" />
</>
