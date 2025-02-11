import * as React from "react"
import '../css/global.css'

interface ParagraphProps{
    text: string;
}
const Paragraph = ({text}: ParagraphProps) => {
    return (
        <>
            <p className="font-site-serif font-normal p-1" style={{maxWidth:"24rem"}}>{text}</p>
        </>
    );
}

export default Paragraph ;