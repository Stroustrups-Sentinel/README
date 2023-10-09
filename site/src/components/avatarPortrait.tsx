import * as React from "react"
import '../css/global.css'

interface AvatarPortraitProps{
    imageUrl : string;
    height?: string;
    width?: string;
    altText?: string;
}

const AvatarPortrait = ( {imageUrl, height="380px", width="380px", altText="avatar-image"} : AvatarPortraitProps ) => {
    return (
            <>
                <img className="border-2 border-gray rounded-24" src={imageUrl} alt={altText} height={height} width={width} />
            </>
    );
};

export default AvatarPortrait;