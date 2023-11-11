import * as React from "react";
import '../css/global.css'

interface ContactCardProps {
    name: string;
    tag: string;
    logoUrl?: string;
    iconUrl?: string;
}

const ContactCard = ({ name, tag, logoUrl = "https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg", iconUrl = "https://api.iconify.design/nimbus:planet.svg" }: ContactCardProps) => {
    return (<div className="bg-black border-2 border-grey rounded-24 flex m-4 ">
        <div className="hw-48 rounded-48 bg-accent ml-4 mr-2 my-auto flex items-center justify-center">
            <img src={iconUrl} alt="icon" className="icon-24 white-text" />
        </div>
        <div className="my-auto mr-2">
            <div><span className="white-text font-site-sans text-base">{name}</span></div>
            <div><span className="white-text font-site-sans text-sm">{tag}</span></div>
        </div>
        <div className="flex items-center justify-center">
            <img className="icon-80 mx-auto block" src={logoUrl} alt="logo" />
        </div>
    </div>);
}

export default ContactCard;