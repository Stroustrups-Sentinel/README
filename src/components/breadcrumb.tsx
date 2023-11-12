import * as React from "react"

interface BreadcrumbProps {
    links?: [string[]];
    currentPage?: string;
    homeUrl?: string;

}

const currentPageElementHtml = (pageTitle: string) => (<li aria-current="page">
    <div className="flex items-center">
        <svg className="w-4 h-4 mx-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="m10.18 8.05l-5.66 5.56l.87.89l5.71-5.59a1.18 1.18 0 0 0 .39-.86a1.13 1.13 0 0 0-.39-.85L5.4 1.5l-.89.88z" /></svg>
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 capitalize">{pageTitle}</span>
    </div>
</li>);

//TODO: generate the breadcrumb , and select a good data structure for this
const crumbsTrail = (links: [string[]]) => {
    
    return ;};

const Breadcrumb = ({ links = [[]], currentPage = "", homeUrl = "/" }: BreadcrumbProps) => {



    let crumbsTrail: string = "";

    if (links[0].length > 0) {
        crumbsTrail = crumbsTrail +
            `<li>
        <div className="flex items-center">

            <svg className="w-4 h-4 mx-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="m10.18 8.05l-5.66 5.56l.87.89l5.71-5.59a1.18 1.18 0 0 0 .39-.86a1.13 1.13 0 0 0-.39-.85L5.4 1.5l-.89.88z" /></svg>
            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">${links.length}</a>
        </div>
        </li>`;
    }



    return (
        <div>

            {/* [ Breadcrumb here ] */}


            <nav className="flex px-5 py-3 text-gray-700 border-2 border-grey rounded-24 bg-gray-50 dark:bg-gray-800 " aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href={homeUrl} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            {/* <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                                </svg> */}
                            <svg className="w-4 h-4 mr-2.5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M15.5 14.69h-1.25V7.78a.62.62 0 0 0-.25-.47L8.4 2.7a.65.65 0 0 0-.81 0L2 7.31a.62.62 0 0 0-.22.47v6.91H.5V7.78a1.87 1.87 0 0 1 .68-1.44l5.62-4.6a1.88 1.88 0 0 1 2.39 0l5.63 4.6a1.87 1.87 0 0 1 .68 1.44z" /><path fill="currentColor" d="M11.05 12.11H9.8A1.72 1.72 0 0 0 8 10.49a1.72 1.72 0 0 0-1.8 1.62H5a3 3 0 0 1 3-2.87a3 3 0 0 1 3.05 2.87zm-6.1 0H6.2v2.58H4.95zm4.85 0h1.25v2.58H9.8z" /></svg>
                            Home
                        </a>
                    </li>
                    {crumbsTrail}
                    {
                        currentPage != "" ? currentPageElementHtml(currentPage) : null
                    }
                </ol>
            </nav>


        </div>
    );
}

export default Breadcrumb;