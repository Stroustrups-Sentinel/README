import * as React from "react"

interface GalleryProps {
    imageUrls: string[]
}

const GalleryImage = (imageUrl: string) => {
    return (<div>
        <img className="h-auto max-w-full border-2 border-grey" src={imageUrl} alt="" />
    </div>);
}

const createGalleryList = (imageUrls: string[]) => imageUrls.map((imageUrl) => GalleryImage(imageUrl));

const Gallery = ({ imageUrls }: GalleryProps) => {
    return (
        <div className="grid gap-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {createGalleryList(imageUrls)}
            </div>
        </div>
    );
}

export default Gallery;