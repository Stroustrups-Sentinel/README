import * as React from "react"
import TechnologyIcon from "./technologyIcon";
import Button from "./button";

import GatsbyConfig from "../../gatsby-config"

const siteUrl:string =  (GatsbyConfig.siteMetadata ? GatsbyConfig.siteMetadata.siteUrl : "") + "";//TODO: if possible, do something about this hack

const Footer = () => {
    return (
        <div className="bg-black text-white flex flex-wrap justify-evenly py-6 items-center">
            <div className="">
                <TechnologyIcon src="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg" alt="site logo" link={siteUrl}></TechnologyIcon>
                <a href="//www.dmca.com/Protection/Status.aspx?ID=1b30f853-da27-44ce-9785-2f53fded92ae" title="DMCA.com Protection Status" className="dmca-badge"> <img src ="https://images.dmca.com/Badges/dmca-badge-w100-2x1-02.png?ID=1b30f853-da27-44ce-9785-2f53fded92ae"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
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