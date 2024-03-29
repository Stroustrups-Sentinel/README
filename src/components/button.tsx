import * as React from "react";
import '../css/global.css'

interface ButtonProps {
    text: string;
    link: string;
    size?: string;
    background?: string;
    isExternalLink?:boolean;
    

}

const Button = ({ text, link, size="regular", background="default",isExternalLink=false }: ButtonProps) => {
    let classNames : string = "rounded-24 p-2 px-4  font-bold font-site-sans big-button hover:text-gray-50 hover:shadow-md hover:bg-gray-900 transition-all hover:duration-300";

    if (background == "black") {
        classNames = classNames + " bg-p-black text-lime dark:text-p-black dark:bg-cloud-white";
    }
    else{
    classNames = classNames + " bg-accent ";}


    return (
        <a href={link} target= {(isExternalLink ? "_blank":"")}>
            <button className={classNames} type="button">
                {
                    isExternalLink ? <span className="flex">
                    <p>{text}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M14.21 1.5H10v1.25h3.08L7.9 7.21l.82 1l5.53-4.77V7h1.25V2.79a1.29 1.29 0 0 0-1.29-1.29"/><path fill="currentColor" d="M12.25 13.25H1.75v-8.5H7.5V3.5h-6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h-1.25z"/></svg>
                </span> : text
                }
            </button>
        </a>
    );
}

export default Button;