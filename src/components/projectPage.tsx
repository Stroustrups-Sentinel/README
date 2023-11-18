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
import CenteredTitle from "./centeredTitle";

interface ProjectPageProps {
    projectName: string;
}
const generateTechnologies = () => {

}



const ProjectPage = ({ projectName }: ProjectPageProps) => {
    return (<div>
        <Navbar ></Navbar>
        <div className="p-2 bg-pattern-te m-4 rounded-24 shadow-lg">
            <div className="bg-red-500 rounded-24 ">
                <CenteredTitle title={"THIS IS A WORK IN PROGRESS <!>"} ></CenteredTitle>
            </div>
            <hr />
            <CenteredProjectTitle title={projectName} ></CenteredProjectTitle>

            <div className="flex flex-wrap justify-evenly">
                <AvatarPortrait
                    imageUrl={"https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg"}
                    orientation="square"
                    border={false}
                />
                <div className="">
                    <div className="mt-4"></div>
                    <div className="text-xl">
                        <Paragraph text="My portfolio website showcasing my skills, progress and career as a software engineer." />
                    </div>
                    <div className="mt-10"></div>

                    <Button text="Github repository" link={"https://github.com/Stroustrups-Sentinel/readme"} size={"large"} background="black" />
                    <div className="mt-4"></div>
                    <Button text="open" link={"https://github.com/Stroustrups-Sentinel/readme"} size={"large"} />

                </div>
            </div>
            <div>
                <img className="shadow m-1 border-2" height={500} src="https://github.com/Stroustrups-Sentinel/readme/blob/main/src/images/projects/portfolio/banner.png?raw=true" alt="" />
            </div>
            <div className="mx-4 my-16 flex flex-wrap px-4"><TechnologyIcon src="https://api.iconify.design/logos:react.svg" link="https://react.dev" alt="React"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/logos:gatsby.svg" link="https://www.gatsbyjs.com/" alt="Gatsby"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/logos:bootstrap.svg" link="https://getbootstrap.com/" alt="Bootstrap"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/logos:materializecss.svg" link="https://materializecss.com/" alt="MaterializeCss"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/logos:tailwindcss-icon.svg" link="https://tailwindcss.com/" alt="TailwindCss"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/logos:thymeleaf-icon.svg" link="https://www.thymeleaf.org/" alt="Thymeleaf"></TechnologyIcon>
            </div>
            <div className="cloud-white border-2 border-grey rounded-24 p-4 flex flex-col flex-wrap justify-between mb-6 w-fit mx-4">
                <div className="flex flex-wrap justify-evenly">
                    <Paragraph text="Ipsum eiusmod laboris deserunt dolor incididunt eiusmod aute. Proident culpa qui eiusmod qui laboris sint eu fugiat cillum fugiat. Non culpa sit eu adipisicing ullamco. Mollit duis magna consectetur reprehenderit ea laboris magna aliqua id sunt commodo nostrud. Occaecat cupidatat duis cupidatat culpa.Esse consequat ea ad incididunt. Irure nisi sit mollit in magna qui magna. Reprehenderit aliqua mollit pariatur duis enim adipisicing eiusmod ea veniam elit eiusmod exercitation et consequat. Velit excepteur sit commodo proident. Officia anim id labore deserunt magna et aliquip."></Paragraph>
                    <Paragraph text="Veniam tempor sit aliqua exercitation quis adipisicing Lorem aute consectetur velit. Laborum ad velit do commodo. Est velit consequat ullamco sunt tempor velit. Sint nulla velit laborum dolor qui consequat eu exercitation eiusmod enim ut dolor elit. Eiusmod incididunt do aute ullamco fugiat deserunt amet esse. Sint proident dolor anim mollit est aliqua occaecat minim fugiat cillum fugiat enim aute. Ut dolor nisi commodo exercitation ut cupidatat."></Paragraph>
                </div>
                <div className="mb-16"></div>
            </div>
            <CenteredProjectTitle title="" ></CenteredProjectTitle>
        </div>
        <Footer></Footer>

    </div>);
};

export default ProjectPage;
export {Crumb};