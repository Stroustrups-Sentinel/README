import * as React from "react";
import '../css/global.css'

interface ButtonProps {
    text: string;
    link: string;
    size?: string;

}

const Button = ({ text, link, size="regular" }: ButtonProps) => {
    let classNames = "rounded-24 p-2 px-4 bg-accent primary-text font-bold font-sans";

    size === "large" ? classNames=classNames.concat("big-button"): "";

    return (
        <a href={link}>
            <button className={classNames} type="button">{text}</button>
        </a>
    );
}

export default Button;