import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../../css/global.css'
import Navbar from "../../components/navbar";

const PortfolioPage: React.FC<PageProps> = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <div className="p-2 bg-pattern m-4 rounded-24 shadow-lg">
                    PROJECT PORTFOLIO
                </div>
            </div>
        </>
    );
}

export default PortfolioPage

export const Head: HeadFC = () => <> <title>Project | Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" />
    <link rel="icon" href="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/main/design/favicon.ico" />
</>
