import * as React from "react"
import '../css/global.css'
import Breadcrumb from "./breadcrumb";
import type { Crumb, BreadcrumbProps } from "./breadcrumb";

// import GatsbyConfig from "../../gatsby-config"

function getSiteUrl(startingString: string = "/"): string {

    let siteUrl: string = "https://mcsamuelshoko.github.io/readme/";// (GatsbyConfig.siteMetadata ? GatsbyConfig.siteMetadata.siteUrl : "") + "";//TODO: if possible, do something about this hack too.

    // Check if window is defined (so if in the browser or in node.js).
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
        siteUrl = (window.location.hostname == "localhost" ? startingString : siteUrl);
    }
    return (siteUrl);
}

const siteUrl: string = getSiteUrl();

const Navbar = ({ links, currentPage, homeUrl }: BreadcrumbProps) => {
    return (
        <>


        <div className="bg-cloud-white dark:bg-p-black">
            <nav className="">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href={siteUrl} className="flex items-center">
                        <img src="https://raw.githubusercontent.com/mcsamuelshoko/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg" className="h-8 mr-3 navbar-logo" alt="mcsamuel Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-cloud-white dark:hover:text-lime hover:underline">Portfolio</span>
                    </a>
                    <div className="flex md:order-2">

                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="font-site-sans flex items-center flex-col font-bold text-lg p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            {/* <li>
                                <Breadcrumb links={links} currentPage={currentPage} homeUrl={homeUrl ?? siteUrl}></Breadcrumb>
                            </li> */}
                            <li>
                                <a href={siteUrl + "#projects"} className="block py-2 pl-3 pr-4 primary-text rounded-24 hover:text-dark-green  dark:text-gray-100 dark:hover:text-lime hover:underline" aria-current="page">Projects</a>
                            </li>
                            <li>
                                <a href={siteUrl + "#skills"} className="block py-2 pl-3 pr-4 primary-text rounded-24 hover:text-dark-green  dark:text-gray-100 dark:hover:text-lime hover:underline">Skills</a>
                            </li>
                            <li>
                                <a href={siteUrl + "#contact"} className="block py-2 pl-3 pr-4 primary-text rounded-24 hover:text-dark-green  dark:text-gray-100 dark:hover:text-lime hover:underline">Contact</a>
                            </li>
                            <li>
                                <a href={siteUrl + "#resume"} className="block py-2 pl-3 pr-4 primary-text rounded-24 hover:text-dark-green  dark:text-gray-100 dark:hover:text-lime hover:underline">Resume</a>
                            </li>
                            <li>
                                <a href={siteUrl + "#about"} className="block py-2 pl-3 pr-4 primary-text rounded-24 hover:text-dark-green  dark:text-gray-100 dark:hover:text-lime hover:underline">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Breadcrumb --> */}
            <nav className="flex p-2 justify-center" >

                <Breadcrumb links={links} currentPage={currentPage} homeUrl={homeUrl ?? siteUrl}></Breadcrumb>

            </nav>
            </div>
            <div className="navbar-gradient animate-gradient p-2"></div>


        </>
    );
};


export default Navbar;
export { Crumb, getSiteUrl };