import * as React from "react"
import '../css/global.css'

interface TechnologyIconProps{
    src: string;
    alt: string;
    link: string;
}

const TechnologyIcon = ({ src, alt, link}:TechnologyIconProps) => {
    return (
        <a className="m-2" href={link} target="_blank" title={"click to visit "+alt}><img className="tech-icon" src={src} alt={alt} /></a>
    );
};

export default TechnologyIcon;