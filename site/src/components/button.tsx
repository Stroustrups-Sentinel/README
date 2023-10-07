import * as React from "react";
import '../css/global.css'

interface ButtonProps {
    text: string;
    link: string;

}

const Button = ({ text, link }: ButtonProps) => {
    return (
        <a href={link}>
            <button className="rounded-24 p-1 bg-accent primary-text font-bold font-sans" type="button">{text}</button>
        </a>
    );
}

export default Button;