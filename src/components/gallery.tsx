import * as React from "react"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface GalleryProps {
    imageUrls: string[]
}

const GalleryImage = (imageUrl: string) => {
    return (<div>
        {/* <a href="#!" className="hover:shadow-lg hover:border-green-400"> */}
        <Zoom>
            <img className="h-auto max-w-full border-2 border-grey " src={imageUrl} alt="" />
        </Zoom>
        {/* </a> */}
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