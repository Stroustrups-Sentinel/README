import * as React from "react"
import TechnologyIcon from "./technologyIcon";
import Button from "./button";

import GatsbyConfig from "../../gatsby-config"

const siteUrl:string =  (GatsbyConfig.siteMetadata ? GatsbyConfig.siteMetadata.siteUrl : "") + "";//TODO: if possible, do something about this hack

const Footer = () => {
    return (
        <div className="bg-black text-white flex flex-wrap justify-evenly py-6 items-center">
            <div>
                <TechnologyIcon src="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg" alt="site logo" link={siteUrl}></TechnologyIcon>
            </div>
            <div className="flex justify-center">
                <span>copyright © 2023 All rights reserved</span>
            </div>
            <div className="">
                <Button text="Back to Top" link="#"></Button>
            </div>
        </div>
    );
}

export default Footer;