import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../css/global.css'
import Navbar from "./navbar";
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
                        <Paragraph text="Junior software engineer eager to learn and grow. Fascinated by backend and full-stack development, seeking opportunities to expand my skills and knowledge." />
                    </div>
                    <div className="mt-10"></div>

                    <Button text="Github repository" link={"https://github.com/Stroustrups-Sentinel"} size={"large"} background="black" />
                    <div className="mt-4"></div>
                    <Button text="open" link={"https://docs.google.com/document/d/1pyCX2P7chSFPGhTiqSFld0lutiR0GG_oWKL_DN3oMcc/edit?usp=sharing"} size={"large"} />

                </div>
            </div>
            <div>
                <img className="shadow m-1 border-2" height={500} src="https://github.com/Stroustrups-Sentinel/readme/blob/main/src/images/projects/portfolio/banner.png?raw=true" alt=""  />
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
                    <Paragraph text="When I'm not coding, I expand my knowledge and interests in various ways. I listen to podcasts on finance, self-help, graphic design, communication, and other topics that spark my curiosity. I also relax by listening to music, watching humorous videos and memes, or playing games to unwind and manage stress. Additionally, I stay up-to-date with the latest tech industry insights and trends by watching conference talks and listening to developer podcasts, where I can learn from experienced professionals and gain valuable tips and advice."></Paragraph>
                    <Paragraph text="As a junior engineer, sustainability, efficiency, and integrity guide me. I focus on reusable, maintainable code, optimize processes, and prioritize accountability. Learning from seniors, I aim to adopt best practices. Continuous learning strengthens my skills, and I strive for long-term growth. My goal is to deliver quality solutions, and I welcome opportunities to enhance my abilities."></Paragraph>
                </div>
                <div className="mb-16"></div>
            </div>
            <CenteredProjectTitle title="" ></CenteredProjectTitle>
        </div>
        <Footer></Footer>

    </div>);
};

export default ProjectPage;