import * as React from "react"
import '../css/global.css'

interface ParagraphProps{
    text: string;
}
const Paragraph = ({text}: ParagraphProps) => {
    return (
        <>
            <p className="font-serif font-normal p-1" style={{width:"24rem"}}>{text}</p>
        </>
    );
}

export default Paragraph ;