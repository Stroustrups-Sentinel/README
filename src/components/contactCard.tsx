import * as React from "react";
import '../css/global.css'

interface ContactCardProps {
    name: string;
    tag: string;
    logoUrl?: string;
    iconUrl?: string;
}

const ContactCard = ({ name, tag, logoUrl = "https://api.iconify.design/nimbus:user-circle.svg?color=%23f4f4f9", iconUrl = "https://api.iconify.design/nimbus:planet.svg?color=%23f4f4f9" }: ContactCardProps) => {
    return (<div className="bg-black border-2 border-grey rounded-24 flex">
        <div className="hw-48 rounded-48 bg-accent">
            <img src={iconUrl} alt="icon" className="icon-24 white-text" />
        </div>
        <div>
            <div><span>{name}</span></div>
            <div><span>{tag}</span></div>
        </div>
        <div>
            <img className="tech-icon" src={logoUrl} alt="logo" />
        </div>
    </div>);
}

export default ContactCard;