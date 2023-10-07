import * as React from "react"
import '../css/global.css'

interface AvatarPortraitProps{
    imageUrl : string;
    height?: string;
    width?: string;
    altText?:string
}

const AvatarPortrait = ( {imageUrl, height="960px", width="480px", altText="avatar-image"} : AvatarPortraitProps ) => {
    return (
            <>
                <img className="border border-gray rounded-24" src={imageUrl} alt={altText} height={height} width={width} />
            </>
    );
};

export default AvatarPortrait;