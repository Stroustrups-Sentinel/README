import * as React from "react"
import '../css/global.css'

interface AvatarPortraitProps {
    imageUrl: string;
    height?: string;
    width?: string;
    altText?: string;
    orientation?: string;
}

const AvatarPortrait = ({ imageUrl, height = "469px", width = "380px", altText = "avatar-image", orientation = "portrait" }: AvatarPortraitProps) => {
    let newHeight: string = height;
    let classNames: string = "avatar";
    if (orientation == "square") {
        newHeight = width;
        classNames = "square-avatar";
    }
    return (
        <>
            <img className={"border-2 border-gray rounded-24 " + classNames} src={imageUrl} alt={altText} height={newHeight} width={width} />
        </>
    );
};

export default AvatarPortrait;