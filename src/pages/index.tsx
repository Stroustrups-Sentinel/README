import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../css/global.css'
import projects from '../json/projects.json'
import Navbar from "../components/navbar"
import CenteredTitle from "../components/centeredTitle"
import AvatarPortrait from "../components/avatarPortrait"
import Button from "../components/button"
import Paragraph from "../components/paragraph"
import ProjectCard from "../components/projectCard"
import Footer from "../components/footer"
import TechnologyIcon from "../components/technologyIcon"
import SkillCard from "../components/skillCard"
import ListItem from "../components/listItem"
import ContactCard from "../components/contactCard"


// -------------------------------------------------

const projectsData = projects;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="p-2 bg-pattern m-4 rounded-24 shadow-lg">

          <div className="bg-red-500 rounded-24 ">
            <CenteredTitle title={"THIS IS A WORK IN PROGRESS <!>"} ></CenteredTitle>
          </div>
          <hr />
          <CenteredTitle title={"MC SAMUEL SHOKO"} ></CenteredTitle>


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
              <Button text="Download Resume" link={"https://app.enhancv.com/resume/652c04424fe2836983cc4666"} size={"large"} />
              <div className="mt-4"></div>
              <Button text="Github profile" link={"https://github.com/Stroustrups-Sentinel"} size={"large"} background="black"/>

            </div>
          </div>

          <CenteredTitle title="PROJECTS" topChevron={true} id="projects"></CenteredTitle>
          {/* <pre>{JSON.stringify(projectsData)}</pre> */}
          <div className="flex flex-wrap justify-evenly">
            {projectsData.map((data) => <ProjectCard 
            platform={data.platform ? data.platform : "--"} 
            type={data.type ? data.type : "--"} 
            name={data.name ? data.name: "--"} 
            technologies={data.technologies ? data.technologies : []} 
            description={data.description ? data.description : ""} logoUrl="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg" imgUrl="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg" />)}

          </div>

          <CenteredTitle title="SKILLS" topChevron={true} id="skills"></CenteredTitle>
          <div className="flex flex-wrap justify-evenly">
            <div className="cloud-white border-2 border-grey rounded-24 py-2 px-4 mb-6">
              {/* MAIN CARDS */}



              <SkillCard title="Adaptability" skillScore={5} skillTotal={5} logo="https://api.iconify.design/nimbus:apps.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Algorithms & Data structures" skillScore={2} skillTotal={5} logo="https://api.iconify.design/nimbus:pyramid.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Automation" skillScore={2} skillTotal={5} logo="https://api.iconify.design/nimbus:share.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Coding best practices" skillScore={3} skillTotal={5} logo="https://api.iconify.design/nimbus:check-circle.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Collaboration" skillScore={4} skillTotal={5} logo="https://api.iconify.design/nimbus:user-group.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Communication" skillScore={48} skillTotal={50} logo="https://api.iconify.design/nimbus:chat-dots.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Databases" skillScore={4} skillTotal={5} logo="https://api.iconify.design/nimbus:vertical-stacks.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Documentation" skillScore={3} skillTotal={5} logo="https://api.iconify.design/nimbus:file-alt.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Initiative" skillScore={4} skillTotal={5} logo="https://api.iconify.design/nimbus:rocket.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Problem solving" skillScore={95} skillTotal={100} logo="https://api.iconify.design/nimbus:lightbulb.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Programming languages" skillScore={87} skillTotal={100} logo="https://api.iconify.design/nimbus:code.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Testing/debugging" skillScore={2} skillTotal={5} ></SkillCard>
              <SkillCard title="Version Control" skillScore={65} skillTotal={100} logo="https://api.iconify.design/nimbus:history.svg?color=%23f4f4f9" ></SkillCard>






            </div>
            <div className="">
              <div className="cloud-white border-2 border-grey rounded-24 py-4 max-w-800">
                <span className="px-4">
                  Technologies
                </span>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* L A N G U A G E S
                  <br /> */}
                  {/* Frontend: HTML/CSS,Sass, JavaScript, TypeScript */}
                  <TechnologyIcon src="https://api.iconify.design/logos:html-5.svg" link="https://html.com" alt="Html"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:css-3.svg" link="https://www.w3.org/Style/CSS/Overview.en.html" alt="CSS"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:sass.svg" link="https://sass-lang.com/" alt="Sass"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:javascript.svg" link="https://www.javascript.com/" alt="JavaScript"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:typescript-icon.svg" link="https://www.typescriptlang.org/" alt="TypeScript"></TechnologyIcon>
                  {/* Backend: Python, Java, C#, C++, Php, Go */}
                  <TechnologyIcon src="https://api.iconify.design/logos:python.svg" link="https://python.org" alt="Python"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:java.svg" link="https://www.java.com/en/" alt="Java"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/devicon:csharp.svg" link="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" alt="csharp"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:c-plusplus.svg" link="https://cplusplus.com/" alt="c++"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:php.svg" link="https://www.php.net/" alt="Php"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/devicon:go.svg" link="https://go.dev/" alt="Golang"></TechnologyIcon>
                  {/* Mobile: Dart */}
                  <TechnologyIcon src="https://api.iconify.design/logos:dart.svg" link="https://dart.dev/" alt="dart"></TechnologyIcon>



                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* F R A M E W O R K S
                  <br />
                  Frontend: React,Gatsby, Bootstrap, Materialize,Tailwindcss */}
                  <TechnologyIcon src="https://api.iconify.design/logos:react.svg" link="https://react.dev" alt="React"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:gatsby.svg" link="https://www.gatsbyjs.com/" alt="Gatsby"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:bootstrap.svg" link="https://getbootstrap.com/" alt="Bootstrap"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:materializecss.svg" link="https://materializecss.com/" alt="MaterializeCss"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:tailwindcss-icon.svg" link="https://tailwindcss.com/" alt="TailwindCss"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:thymeleaf-icon.svg" link="https://www.thymeleaf.org/" alt="Thymeleaf"></TechnologyIcon>
                  {/* Backend: Django, Spring, Laravel, .NET */}
                  <TechnologyIcon src="https://api.iconify.design/logos:django-icon.svg" link="https://www.djangoproject.com/" alt="Django"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:spring-icon.svg" link="https://spring.io/" alt="Spring"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:laravel.svg" link="https://laravel.com/" alt="Laravel"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:dotnet.svg" link="https://dotnet.microsoft.com/" alt="DotNet"></TechnologyIcon>
                  {/* Mobile: Flutter */}
                  <TechnologyIcon src="https://api.iconify.design/logos:flutter.svg" link="https://flutter.dev/" alt="Flutter"></TechnologyIcon>
                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* D A T A B A S E S
                  <br />
                  SQL: MySQL, PostgreSQL, SQL Server */}
                  <TechnologyIcon src="https://api.iconify.design/logos:mysql-icon.svg" link="https://www.mysql.com/" alt="MySql"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:postgresql.svg" link="https://www.postgresql.org/" alt="PostgreSql"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/devicon:azuresqldatabase.svg" link="https://www.microsoft.com/en-za/sql-server/sql-server-downloads" alt="SQL Server"></TechnologyIcon>
                  {/* NoSQL: MongoDB */}
                  <TechnologyIcon src="https://api.iconify.design/logos:mongodb-icon.svg" link="https://www.mongodb.com/" alt="MongoDB"></TechnologyIcon>

                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* I N F R A S T R U C T U R E
                  <br />
                  DevOps: Docker, Kubernetes, Azure */}
                  <TechnologyIcon src="https://api.iconify.design/logos:docker-icon.svg" link="https://www.docker.com/" alt="Docker"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:kubernetes.svg" link="https://kubernetes.io/" alt="Kubernetes"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:microsoft-azure.svg" link="https://azure.microsoft.com/" alt="Azure"></TechnologyIcon>
                  {/* Version Control: Git */}
                  <TechnologyIcon src="https://api.iconify.design/logos:git-icon.svg" link="https://git-scm.com/" alt="Git"></TechnologyIcon>
                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* D E S I G N / P R O T O T Y P I N G
                  <br />
                  Lunacy, Figma, Inkscape */}
                  <TechnologyIcon src="https://raw.githubusercontent.com/maki-studio/.github/b974af72f4208daf7678d1cf772096e55bcc7aa0/profile/lunacy-logo.svg" link="https://icons8.com/lunacy" alt="Lunacy"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:figma.svg" link="https://www.figma.com/" alt="Figma"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/devicon:inkscape.svg" link="https://inkscape.org/" alt="Inkscape"></TechnologyIcon>

                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* T E S T I N G
                  <br />
                  Jest */}
                  <TechnologyIcon src="https://api.iconify.design/logos:jest.svg" link="https://jestjs.io/" alt="jest"></TechnologyIcon>
                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4">
                  {/* O T H E R &nbsp; T O O L S
                  <br />
                  GitHub, Jira, Confluence */}
                  <TechnologyIcon src="https://api.iconify.design/logos:github-icon.svg" link="https://github.com" alt="Github"></TechnologyIcon>
                  {/* <TechnologyIcon src="" link="" alt=""></TechnologyIcon> */}
                </div>
              </div>
              <div className="mb-6"></div>
              <div className="cloud-white border-2 border-grey rounded-24 font-site-sans p-4 py-12 flex flex-wrap ">
                <Paragraph text="As a passionate junior software engineer, I'm always seeking new challenges to strengthen my abilities. Fascinated by backend and full-stack work, I find motivation in breaking down complicated issues and working on tasks outside my current scope. Currently, I'm focused on skills like DevOps, testing and anything pushing my progress further."></Paragraph>
                <Paragraph text="Whether through code projects or other experiences, I believe adventures inspire continual learning. As I build my portfolio, I welcome opportunities within the tech community to aid my development. My goal is ongoing self-improvement through diverse work, network growth, and perpetually pursuing greater technical hurdles."></Paragraph>
              </div>
            </div>
          </div>

          <CenteredTitle title="RESUME" topChevron={true} id="resume"></CenteredTitle>
          <div className="flex flex-wrap justify-evenly">
            <div className="cloud-white border-2 border-grey rounded-24 p-4 mb-6 job-xp-card flex flex-col flex-wrap justify-between" >
              <div className="flex flex-wrap-reverse">
                <ul>
                  <li>
                    <ListItem company="Indonesian Standard" position="Freelance Developer" jobBrief="Co-engineered and developed web-app according to client's requirements."></ListItem>
                    <ListItem company="Telecontract (telco)" position="Customer Service Representative" jobBrief="assisted clients with their technical issues and monitored thousands of equipment"></ListItem>
                  </li>
                </ul>

                <ul>
                  <li>
                    <ListItem company="University of Zimbabwe" position="Upper Second Class Honours | Weighted GPA of 3.00 - 3.59" jobBrief="Bsc. Honors Computer Science"></ListItem>
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
            {/* //TODO: add links to the onclick effect of the component */}
            <ContactCard name="LinkedIn" tag="lets connect on"  logoUrl="https://api.iconify.design/logos:linkedin-icon.svg" iconUrl="https://api.iconify.design/nimbus:chat-dots.svg"></ContactCard>
            <ContactCard name="Discord" tag="find me on discord" logoUrl="https://api.iconify.design/logos:discord-icon.svg" iconUrl="https://api.iconify.design/nimbus:chat-dots.svg"></ContactCard>
            <ContactCard name="Twitter" tag="send a tweet" logoUrl="https://api.iconify.design/logos:twitter.svg" iconUrl="https://api.iconify.design/nimbus:chat-dots.svg"></ContactCard>
            <ContactCard name="Gmail" tag="send me an email" logoUrl="https://api.iconify.design/logos:google-gmail.svg" iconUrl="https://api.iconify.design/nimbus:mail.svg"></ContactCard>
            <ContactCard name="PhoneNumber" tag="contact me on" iconUrl="https://api.iconify.design/nimbus:mobile.svg"></ContactCard>
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
                <Paragraph text="When I'm not coding, I expand my knowledge and interests in various ways. I listen to podcasts on finance, self-help, graphic design, communication, and other topics that spark my curiosity. I also relax by listening to music, watching humorous videos and memes, or playing games to unwind and manage stress. Additionally, I stay up-to-date with the latest tech industry insights and trends by watching conference talks and listening to developer podcasts, where I can learn from experienced professionals and gain valuable tips and advice."></Paragraph>
                <Paragraph text="As a junior engineer, sustainability, efficiency, and integrity guide me. I focus on reusable, maintainable code, optimize processes, and prioritize accountability. Learning from seniors, I aim to adopt best practices. Continuous learning strengthens my skills, and I strive for long-term growth. My goal is to deliver quality solutions, and I welcome opportunities to enhance my abilities."></Paragraph>
              </div>
              <div className="mb-16"></div>
              <div className="flex flex-wrap">
                <TechnologyIcon src="https://api.iconify.design/logos:github-icon.svg" link="https://github.com/Stroustrups-Sentinel" alt="Github profile"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/logos:wakatime.svg" link="https://wakatime.com/@ef9df9b6-cb1a-4e73-9d42-35b93e0014d0" alt="Wakatime profile"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/logos:dribbble-icon.svg" link="https://dribbble.com/McSamuel" alt="Dribble profile"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/logos:figma.svg" link="https://www.figma.com/" alt="Figma profile"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/devicon:behance.svg" link="https://www.behance.net/mcsamuelshoko" alt="Behance profile"></TechnologyIcon>

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

export const Head: HeadFC = () => <> <title>Home | Mc Samuel Shoko</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" />  
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" />
  <link rel="icon" href="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/main/design/favicon.ico" />
</>
