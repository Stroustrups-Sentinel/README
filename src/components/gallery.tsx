import * as React from "react"

interface GalleryProps{
    imageUrls:string[]
}

const Gallery = ({imageUrls=[]}:GalleryProps) => {
    return (<>
    <img className="shadow m-2 border-2 height-480"  src="https://github.com/Stroustrups-Sentinel/readme/blob/main/src/images/projects/portfolio/banner.png?raw=true" alt="" />
                <img className="shadow m-2 border-2 height-480"  src="https://github.com/Stroustrups-Sentinel/readme/blob/main/src/images/projects/portfolio/banner.png?raw=true" alt="" />
                <img className="shadow m-2 border-2 height-480"  src="https://github.com/Stroustrups-Sentinel/readme/blob/main/src/images/projects/portfolio/banner.png?raw=true" alt="" />
                <img className="shadow m-2 border-2 height-480"  src="https://github.com/Stroustrups-Sentinel/readme/blob/main/src/images/projects/portfolio/banner.png?raw=true" alt="" />
                <img className="shadow m-2 border-2 height-480"  src="https://github.com/Stroustrups-Sentinel/readme/blob/main/src/images/projects/portfolio/banner.png?raw=true" alt="" />
            </>);
}