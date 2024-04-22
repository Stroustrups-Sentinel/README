import * as React from "react";
import TechnologyIcon from "./technologyIcon";
import Button from "./button";

import {getSiteUrl } from "../components/projectPage";

const siteUrl: string = getSiteUrl();

const Footer = () => {
    return (
        <footer className="bg-black text-white ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <TechnologyIcon
                        src="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg"
                        alt="home"
                        link={siteUrl}
                    ></TechnologyIcon>

                    <ul className="flex flex-wrap items-center mb-6  sm:mb-0 ">
                        <li>
                            <div className="font-medium font-site-mono">
                                <p>Made with love ❤️ & passion 🔥 = ❤️‍🔥</p>
                            </div>
                        </li>
                        <li>
                            <span className="mx-4"></span>
                        </li>
                        <li>
                            <Button text="Back to Top" link="#"></Button>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-transparent lg:my-8 navbar-gradient pt-1" />
                <span className="blockfont-medium font-site-mono sm:text-center ">
                    © 2024 . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
