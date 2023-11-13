import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../../css/global.css'

const PortfolioPage: React.FC<PageProps> = () => {
    return (
        <div>PORTFOLIO PROJECT</div>
    );
}

export default PortfolioPage

export const Head: HeadFC = () => <> <title>Project | Portfolio</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" />
    <link rel="icon" href="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/main/design/favicon.ico" />
</>
