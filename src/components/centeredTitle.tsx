import * as React from "react"
import '../css/global.css'

interface CenteredTitleProps {
    title : string;
    id?: string; 
    size?  : string;
    topChevron? : boolean;
}
const CenteredTitle = (
{title, id="", size="5rem", topChevron=false }: CenteredTitleProps
)  => {

    return (
        <div className="my-20">
            { topChevron ? <div id={id} className="my-10 justify-center flex">
                <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'><path fill='currentColor' d='M8 10.18L2.39 4.52l-.89.87l5.59 5.71a1.18 1.18 0 0 0 .86.39a1.13 1.13 0 0 0 .85-.39l5.7-5.7l-.88-.89z' /%3E%3C/svg%3E" />
            </div> : '' }
            <span className="font-site-sans font-bold text-4xl md:text-7xl justify-center flex text-primary dark:text-white" >{title}</span>
        </div>
    );
};

export default CenteredTitle;