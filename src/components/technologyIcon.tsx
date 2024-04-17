import * as React from "react"
import '../css/global.css'

interface TechnologyIconProps{
    src: string;
    alt: string;
    link: string;
    invertColor?:boolean;
}

const TechnologyIcon = ({ src, alt, link, invertColor=false}:TechnologyIconProps) => {
    const imgStyles:string = (invertColor? 'dark:invert' : '');
    return (
        <a className="m-2" href={link} target="_blank" title={"click to visit "+alt}><img className={"tech-icon "+imgStyles} src={src} alt={alt} /></a>
    );
};

export default TechnologyIcon;