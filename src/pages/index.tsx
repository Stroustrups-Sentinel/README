import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../css/global.css'
import Navbar from "../components/navbar"
import CenteredTitle from "../components/centeredTitle"
import AvatarPortrait from "../components/avatarPortrait"
import Button from "../components/button"
import Paragraph from "../components/paragraph"
import ProjectCard from "../components/projectCard"
import Footer from "../components/footer"
import JSON from "json5"
import parseJson from "parse-json"


// -------------------------------------------------

const projectsData = [
  {
    "platform": "web",
    "type": "fullstack",
    "name": "Accomo-Venient",
    "technologies": "php, mysql, css, javascript, jquery",
    "description": "description here",
    "experience": "--how was, and how did it go it ?--",
    "imgUrl": "",
    "logoUrl": "",
    "openUrl": "#",
    "moreUrl": "#",
    "altText": "",
    "images": []
  },

]; //JSON.parse(JSON.stringify(parseJson("../json/projects.json")));

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>

        <CenteredTitle title={"NOT FINAL PRODUCT <!>"} ></CenteredTitle>
        <CenteredTitle  topChevron={true} title={"disclaimer: logos and resources belong to their owners."} ></CenteredTitle>

        <div className="flex">.
          <AvatarPortrait
            imageUrl={"https://flowbite.com/docs/images/logo.svg"}
          />
          <div>
            <Paragraph text="One should, nevertheless, consider that a
              description of the basic reason of the market
              tendencies can be regarded as decidedly
              insignificant." />
            <Button text="Download Resume" link={"#resume"} size={"large"} />

          </div>
        </div>

        <CenteredTitle title="PROJECTS" topChevron={true} id="projects"></CenteredTitle>
        {/* <pre>{JSON.stringify(projectsData)}</pre> */}
        <div className="flex flex-wrap">
          {projectsData.map((data) => <ProjectCard platform={data.platform} type={data.type} name={data.name} technologies={data.technologies.split(',')} description={data.description} logoUrl="https://flowbite.com/docs/images/logo.svg" imgUrl="https://flowbite.com/docs/images/logo.svg" />)}

        </div>

        <CenteredTitle title="SKILLS" topChevron={true} id="skills"></CenteredTitle>
        <div className="rounded-24 border-grey">
          <div className="">

          </div>
          <div className="">

          </div>
        </div>

        <CenteredTitle title="RESUME" topChevron={true} id="resume"></CenteredTitle>
        <div></div>

        <CenteredTitle title="CONTACT" topChevron={true} id="contact"></CenteredTitle>
        <div></div>

        <CenteredTitle title="ABOUT" topChevron={true} id="about"></CenteredTitle>
        <div></div>

        <Footer></Footer>


      </div>
      <hr className="divide-x-2 divide-green-400" />

    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <> <title>Portfolio</title> 
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"/>
<link rel="icon" href="https://www.w3schools.com/favicon.ico"/>
</>
