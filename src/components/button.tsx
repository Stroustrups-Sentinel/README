import * as React from "react";
import '../css/global.css'

interface ButtonProps {
    text: string;
    link: string;
    size?: string;
    background?: string;
    

}

const Button = ({ text, link, size="regular", background="default" }: ButtonProps) => {
    let classNames : string = "rounded-24 p-2 px-4 primary-text bg-blue-400 font-bold font-site-sans ";

    if (background == "black") {
        classNames = classNames + " black-bg lime-text";
    }
    else{
    classNames = classNames + " bg-accent ";}

    // if (size == "large"){ classNames = classNames +" big-button"; }

    return (
        <a href={link}>
            <button className={classNames} type="button">{text}</button>
        </a>
    );
}

export default Button;