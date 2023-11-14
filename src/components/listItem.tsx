import * as React from "react"
import '../css/global.css'

interface ListItemProps{
    company : string;
    position: string;
    jobBrief: string;  
}

const ListItem = ({company, position, jobBrief}: ListItemProps) => {
    return (
        <div className="flex font-site-serif m-2 mb-5">
            <div className="icon-24 rounded-24 bg-accent mr-2"></div>
            <div className="">
                <span className="mb-1 font-bold block text-base">{company}</span>
                <span className=" block w-24 text-base">{position}</span>
                <span className="block w-24 text-sm">{jobBrief}</span>
            </div>
        </div>
    );
}

export default ListItem