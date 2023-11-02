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
        <div className="container mx-auto p-2 bg-slate-600">
          {/* <CenteredTitle title="NOT FINAL PRODUCT <!>"></CenteredTitle> */}
        <hr />
        <CenteredTitle title={"MC SAMUEL SHOKO"} ></CenteredTitle>


        <div className="flex flex-wrap justify-evenly">
          <AvatarPortrait
            imageUrl={"https://scontent.fcpt9-1.fna.fbcdn.net/v/t39.30808-6/359749123_3389565701303522_5159761682622525303_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCykiaP6yidBW0uyeGzG1B3QuHUFF-Td_dC4dQUX5N32jJ9Xil08TcjP0uULlVw3-xPw1S_xgrjiC1SRJoII7l&_nc_ohc=dzj-pQ234xUAX_uU5C-&_nc_zt=23&_nc_ht=scontent.fcpt9-1.fna&cb_e2o_trans=q&oh=00_AfBeWdpNpZaT6y0pAFMgsCdfFgTUo8ghYNaZ_RyEtnS2SQ&oe=65486563"}
          />
          <div>
          <div className="mt-4"></div>
            <Paragraph text="One should, nevertheless, consider that a
              description of the basic reason of the market
              tendencies can be regarded as decidedly
              insignificant." />
              <div className="mt-10"></div>
            <Button text="Download Resume" link={"#resume"} size={"large"} />

          </div>
        </div>

        <CenteredTitle title="PROJECTS" topChevron={true} id="projects"></CenteredTitle>
        {/* <pre>{JSON.stringify(projectsData)}</pre> */}
        <div className="flex flex-wrap">
          {projectsData.map((data) => <ProjectCard platform={data.platform} type={data.type} name={data.name} technologies={data.technologies.split(',')} description={data.description} logoUrl="https://flowbite.com/docs/images/logo.svg" imgUrl="https://scontent.fcpt9-1.fna.fbcdn.net/v/t39.30808-6/359749123_3389565701303522_5159761682622525303_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCykiaP6yidBW0uyeGzG1B3QuHUFF-Td_dC4dQUX5N32jJ9Xil08TcjP0uULlVw3-xPw1S_xgrjiC1SRJoII7l&_nc_ohc=dzj-pQ234xUAX_uU5C-&_nc_zt=23&_nc_ht=scontent.fcpt9-1.fna&cb_e2o_trans=q&oh=00_AfBeWdpNpZaT6y0pAFMgsCdfFgTUo8ghYNaZ_RyEtnS2SQ&oe=65486563" />)}

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

        </div>
        <Footer></Footer>
      </div>
      <hr className="divide-x-2 divide-green-400" />

    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <> <title>Mc Samuel Shoko</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" />
  <link rel="icon" href="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/main/design/favicon.ico" />
</>
