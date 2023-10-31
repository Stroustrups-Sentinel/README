import * as React from "react";
import '../css/global.css'

interface ButtonProps {
    text: string;
    link: string;
    size?: string;
    background?: string;
    

}

const Button = ({ text, link, size="regular", background="default" }: ButtonProps) => {
    let classNames = "rounded-24 p-2 px-4 primary-text bg-accent font-bold font-site-sans ";

    // if (background == "black") {
    //     classNames.concat(" bg-accent ")
    // }
    // else{
    // classNames.concat(" bg-accent ");}

    // size === "large" ? classNames=classNames.concat("big-button"): "";

    return (
        <a href={link}>
            <button className={classNames} type="button">{text}</button>
        </a>
    );
}

export default Button;