import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../css/global.css'
import Navbar from "./navbar";
import CenteredProjectTitle from "./centredProjectTitle";
import AvatarPortrait from "./avatarPortrait";
import Button from "./button";
import Paragraph from "./paragraph";
import Footer from "./footer";

interface ProjectPageProps {
    projectName: string;
}

const ProjectPage = ({ projectName }: ProjectPageProps) => {
    return (<div>
        <Navbar ></Navbar>
        <div className="p-2 bg-pattern-te m-4 rounded-24 shadow-lg">
            <CenteredProjectTitle title={projectName} ></CenteredProjectTitle>

            <div className="flex flex-wrap justify-evenly">
                <AvatarPortrait
                    imageUrl={"https://github.com/Stroustrups-Sentinel/readme/blob/develop/src/images/my-avatar.png?raw=true"}
                    orientation="square"
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
            <div></div>
            <div></div>
            <div></div>
            <CenteredProjectTitle title="" ></CenteredProjectTitle>
        </div>
        <Footer></Footer>

    </div>);
};

export default ProjectPage;