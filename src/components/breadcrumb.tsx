import * as React from "react"
// import GatsbyConfig from "../../gatsby-config"

const siteUrl: string = "https://stroustrups-sentinel.github.io/readme/";//(GatsbyConfig.siteMetadata ? GatsbyConfig.siteMetadata.siteUrl : "") + "";//TODO: if possible, do something about this hack

interface Crumb {
    title: string;
    url: string;
}

interface BreadcrumbProps {
    links?: Crumb[];
    currentPage?: string;
    homeUrl?: string;

}

const currentPageElementHtml = (pageTitle: string) => (<li aria-current="page">
    <div className="flex items-center">
        <svg className="w-4 h-4 mx-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="m10.18 8.05l-5.66 5.56l.87.89l5.71-5.59a1.18 1.18 0 0 0 .39-.86a1.13 1.13 0 0 0-.39-.85L5.4 1.5l-.89.88z" /></svg>
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 capitalize">{pageTitle}</span>
    </div>
</li>);


const crumbsTrail = (links: Crumb[]) => {

    return links.map((crumb)=>{
        return (<li>
            <div className="flex items-center">
    
                <svg className="w-4 h-4 mx-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="m10.18 8.05l-5.66 5.56l.87.89l5.71-5.59a1.18 1.18 0 0 0 .39-.86a1.13 1.13 0 0 0-.39-.85L5.4 1.5l-.89.88z" /></svg>
                <a href={crumb.url} className="ml-1 text-sm font-medium text-gray-700 hover:underline md:ml-2 dark:text-gray-400 dark:hover:text-white">{crumb.title}</a>
            </div>
            </li>);
    });
};

const Breadcrumb = ({ links = [], currentPage = "", homeUrl = siteUrl }: BreadcrumbProps) => {


    return (
        <div>

            {/* [ Breadcrumb here ] */}


            <nav className="flex px-5 py-3 text-gray-700 border-2 border-grey rounded-24 bg-cloud-white dark:bg-p-black " aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href={homeUrl} className="inline-flex items-center text-sm font-medium text-gray-700 hover:underline dark:text-gray-400 dark:hover:text-white">                            
                            <svg className="w-4 h-4 mr-2.5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M15.5 14.69h-1.25V7.78a.62.62 0 0 0-.25-.47L8.4 2.7a.65.65 0 0 0-.81 0L2 7.31a.62.62 0 0 0-.22.47v6.91H.5V7.78a1.87 1.87 0 0 1 .68-1.44l5.62-4.6a1.88 1.88 0 0 1 2.39 0l5.63 4.6a1.87 1.87 0 0 1 .68 1.44z" /><path fill="currentColor" d="M11.05 12.11H9.8A1.72 1.72 0 0 0 8 10.49a1.72 1.72 0 0 0-1.8 1.62H5a3 3 0 0 1 3-2.87a3 3 0 0 1 3.05 2.87zm-6.1 0H6.2v2.58H4.95zm4.85 0h1.25v2.58H9.8z" /></svg>
                            Home
                        </a>
                    </li>
                    { links.length > 0 ? crumbsTrail(links) : null}
                    {
                        currentPage != "" ? currentPageElementHtml(currentPage) : null
                    }
                </ol>
            </nav>


        </div>
    );
}

export default Breadcrumb;
export {Crumb, BreadcrumbProps};