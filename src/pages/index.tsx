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
import TechnologyIcon from "../components/technologyIcon"
import SkillCard from "../components/skillCard"
import ListItem from "../components/listItem"
import ContactCard from "../components/contactCard"


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
        <div className="p-2 bg-pattern m-4 rounded-24 shadow-lg">
          
          {/* <div className="bg-red-500">
          <CenteredTitle title={"NOT FINAL PRODUCT <!>"} ></CenteredTitle>
          </div>
          <hr /> */}
          <CenteredTitle title={"MC SAMUEL SHOKO"} ></CenteredTitle>


          <div className="flex flex-wrap justify-evenly">
            <AvatarPortrait
              imageUrl={"https://github.com/Stroustrups-Sentinel/readme/blob/develop/src/images/my-avatar.png?raw=true"}
              orientation="square"
            />
            <div>
              <div className="mt-4"></div>
              <Paragraph text="One should, nevertheless, consider that a
              description of the basic reason of the market
              tendencies can be regarded as decidedly
              insignificant." />
              <div className="mt-10"></div>
              <Button text="Download Resume" link={"https://app.enhancv.com/resume/652c04424fe2836983cc4666"} size={"large"} />

            </div>
          </div>

          <CenteredTitle title="PROJECTS" topChevron={true} id="projects"></CenteredTitle>
          {/* <pre>{JSON.stringify(projectsData)}</pre> */}
          <div className="flex flex-wrap justify-evenly">
            {projectsData.map((data) => <ProjectCard platform={data.platform} type={data.type} name={data.name} technologies={data.technologies.split(',')} description={"Furthermore, one should not forget that some part of the mechanism steadily complete failure of the supposed theory the specific decisions and"} logoUrl="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg" imgUrl="https://scontent.fcpt9-1.fna.fbcdn.net/v/t39.30808-6/359749123_3389565701303522_5159761682622525303_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCykiaP6yidBW0uyeGzG1B3QuHUFF-Td_dC4dQUX5N32jJ9Xil08TcjP0uULlVw3-xPw1S_xgrjiC1SRJoII7l&_nc_ohc=dzj-pQ234xUAX_uU5C-&_nc_zt=23&_nc_ht=scontent.fcpt9-1.fna&cb_e2o_trans=q&oh=00_AfBeWdpNpZaT6y0pAFMgsCdfFgTUo8ghYNaZ_RyEtnS2SQ&oe=65486563" />)}

          </div>

          <CenteredTitle title="SKILLS" topChevron={true} id="skills"></CenteredTitle>
          <div className="flex flex-wrap justify-evenly">
            <div className="cloud-white border-2 border-grey rounded-24 py-2 px-4 mb-6">
              {/* MAIN CARDS */}
              <SkillCard title="Yeeting" skillScore={85} skillTotal={100} ></SkillCard>
              <SkillCard title="Yeeting" skillScore={43} skillTotal={100} ></SkillCard>
              <SkillCard title="Yeeting" skillScore={85} skillTotal={100} ></SkillCard>
              <SkillCard title="Yeeting" skillScore={4} skillTotal={5} ></SkillCard>
              <SkillCard title="Yeeting" skillScore={5} skillTotal={5} ></SkillCard>
              <SkillCard title="Yeeting" skillScore={10} skillTotal={50} ></SkillCard>
            </div>
            <div className="">
              <div className="cloud-white border-2 border-grey rounded-24 py-4">
                <span className="px-4">
                  Technologies
                </span>
                <hr className="border-grey" />
                <div className="flex px-4">
                  L A N G U A G E S
                  <br />
                  Frontend: HTML/CSS, JavaScript, TypeScript
                  Backend: Python, Java, C#, C++
                  Mobile: Swift, Kotlin, React Native

                  <TechnologyIcon src="https://api.iconify.design/logos:python.svg" link="python.org" alt="python"></TechnologyIcon>

                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4">
                  F R A M E W O R K S
                  <br />
                  Frontend: React, Angular, Vue
                  Backend: Django, Spring, .NET
                  Mobile: Flutter, React Native
                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4">
                  D A T A B A S E S
                  <br />
                  SQL: MySQL, PostgreSQL, SQL Server
                  NoSQL: MongoDB, Redis

                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4">
                  I N F R A S T R U C T U R E
                  <br />
                  DevOps: Docker, Kubernetes, AWS, Azure
                  Version Control: Git
                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4">
                  D E S I G N / P R O T O T Y P I N G
                  <br />
                  Sketch, Figma, Adobe XD, InVision

                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4">
                  T E S T I N G
                  <br />
                  Jest, Mocha, Selenium
                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4">
                  O T H E R &nbsp; T O O L S
                  <br />
                  GitHub, Jira, Confluence, Travis CI
                </div>
              </div>
              <div className="mb-6"></div>
              <div className="cloud-white border-2 border-grey rounded-24 font-site-sans p-4 py-12">
                <Paragraph text="Let it not be said that the arrangement of the mechanism
would facilitate the development of The Modification of
Chief Effectiveness (Abel Agnew in The Book of the
Feedback System)
By the way, the point of the comprehensive methods has
common features with the more individual elements of
the operational system"></Paragraph>
              </div>
            </div>
          </div>

          <CenteredTitle title="RESUME" topChevron={true} id="resume"></CenteredTitle>
          <div className="flex flex-wrap justify-evenly">
            <div className="cloud-white border-2 border-grey rounded-24 p-4 mb-6 job-xp-card flex flex-col flex-wrap justify-between" >
              <div className="flex flex-wrap-reverse">
                <ul>
                <li>
                  <ListItem company="Oh My Gaawd" position="Senior Chad" jobBrief="too cool for school i cringed."></ListItem>
                  <ListItem company="Oh My Gaawd" position="Senior Chad" jobBrief="too cool for school i cringed."></ListItem>
                  <ListItem company="Oh My Gaawd" position="Senior Chad" jobBrief="too cool for school i cringed."></ListItem>
                </li>
              </ul>

              <ul>
                <li>
                  <ListItem company="Global Solar Energy Group" position="Senior Chad" jobBrief="The Implementation of Secondary Evaluation"></ListItem>
                  <ListItem company="Oh My Gaawd" position="Senior Chad" jobBrief="too cool for school i cringed."></ListItem>
                  <ListItem company="Oh My Gaawd" position="Senior Chad" jobBrief="too cool for school i cringed."></ListItem>
                </li>
              </ul>
              </div>
              <div className="m-2">
              <Button text="Download Resume" link="https://app.enhancv.com/resume/652c04424fe2836983cc4666"></Button>
              </div>
            </div>

            <div>
              <AvatarPortrait
                imageUrl={"https://github.com/Stroustrups-Sentinel/readme/blob/develop/src/images/graduation.jpg?raw=true"}
                height="469px"
              />
            </div>
          </div>

          <CenteredTitle title="CONTACT" topChevron={true} id="contact"></CenteredTitle>
          <div className="cloud-white border-2 border-grey rounded-24 p-4 m-6 flex flex-wrap justify-evenly">
            <ContactCard name="facebook" tag="lets meet on facebook"></ContactCard>
            <ContactCard name="facebook" tag="lets meet on facebook"></ContactCard>
            <ContactCard name="facebook" tag="lets meet on facebook"></ContactCard>
            <ContactCard name="facebook" tag="lets meet on facebook"></ContactCard>
            <ContactCard name="facebook" tag="lets meet on facebook"></ContactCard>
          </div>

          <CenteredTitle title="ABOUT" topChevron={true} id="about"></CenteredTitle>
          <div className="flex flex-wrap justify-evenly mb-6">
            <div className="mb-6">
            <AvatarPortrait
                imageUrl={"https://github.com/Stroustrups-Sentinel/readme/blob/develop/src/images/my-avatar-wearing-cap.png?raw=true"}
                height="469px"
              />
            </div>
            <div className="cloud-white border-2 border-grey rounded-24 p-4 flex flex-col flex-wrap justify-between mb-6">
              <div className="flex flex-wrap justify-evenly">
                <Paragraph text="Let it not be said that the arrangement of the mechanism
would facilitate the development of The Modification of
Chief Effectiveness (Abel Agnew in The Book of the
Feedback System)
By the way, the point of the comprehensive methods has
common features with the more individual elements of
the operational system."></Paragraph>
                <Paragraph text="Let it not be said that the arrangement of the
mechanism would facilitate the development of
The Modification of Chief Effectiveness (Abel
Agnew in The Book of the Feedback System)
By the way, the point of the comprehensive
methods has common features with the more
individual elements of the operational system."></Paragraph>
              </div>
              <div className="mb-16"></div>
              <div className="flex flex-wrap">
              <TechnologyIcon src="https://api.iconify.design/logos:python.svg" link="python.org" alt="python"></TechnologyIcon>
              <TechnologyIcon src="https://api.iconify.design/logos:python.svg" link="python.org" alt="python"></TechnologyIcon>
              <TechnologyIcon src="https://api.iconify.design/logos:python.svg" link="python.org" alt="python"></TechnologyIcon>
<TechnologyIcon src="https://api.iconify.design/logos:python.svg" link="python.org" alt="python"></TechnologyIcon>
<TechnologyIcon src="https://api.iconify.design/logos:python.svg" link="python.org" alt="python"></TechnologyIcon>

              </div>
            </div>
          </div>

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
