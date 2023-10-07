import * as React from "react";
import '../css/global.css'

interface ButtonProps {
    text: string;
    link: string;
    size?: string;

}

const Button = ({ text, link, size="lg" }: ButtonProps) => {
    return (
        <a href={link}>
            <button className="rounded-24 p-2 px-4 bg-accent primary-text font-bold font-sans" type="button">{text}</button>
        </a>
    );
}

export default Button;