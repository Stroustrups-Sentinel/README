import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"



const NotFoundPage: React.FC<PageProps> = () => {


  return (
    <>
      <Navbar  currentPage="404"></Navbar>
      <div className="bg-pattern-wall  p-4 h-screen">
        <div style={{ height: '15vh' }}></div>
        <div className="flex justify-center">
          <div className="bg-cloud-white dark:bg-p-black dark:text-white rounded-24 shadow p-4 border">
            <h1 className="font-bold font-bold p-2 text-red-800 text-2xl border-b border-gray-500 mb-2">Page not found</h1>
            <p className="p font-site-mono">
              Oops 😅, 
              <br />
              it appears we have hit a wall

              <br />
              {process.env.NODE_ENV === " -development" ? (
                <>
                  <br />
                  Try creating a page in <code className="font-medium text-yellow-500">src/pages/</code>.
                  <br />
                </>
              ) : null}
              <br />
              <div className="flex place-items-center font-bold">

                <Link to="/"><button className="flex place-items-center py-2 pl-3 pr-4 primary-text rounded-24 dark-green-text font-site-mono  text-white navbar-gradient hover:outline hover:outline-black dark:hover:outline-gray-200">
                  <svg className="h-5 w-5 inline-flex" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M15.5 14.69h-1.25V7.78a.62.62 0 0 0-.25-.47L8.4 2.7a.65.65 0 0 0-.81 0L2 7.31a.62.62 0 0 0-.22.47v6.91H.5V7.78a1.87 1.87 0 0 1 .68-1.44l5.62-4.6a1.88 1.88 0 0 1 2.39 0l5.63 4.6a1.87 1.87 0 0 1 .68 1.44z" /><path fill="currentColor" d="M11.05 12.11H9.8A1.72 1.72 0 0 0 8 10.49a1.72 1.72 0 0 0-1.8 1.62H5a3 3 0 0 1 3-2.87a3 3 0 0 1 3.05 2.87m-6.1 0H6.2v2.58H4.95zm4.85 0h1.25v2.58H9.8z" /></svg> &nbsp;

                  Take me Home</button></Link>
              </div>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <><title>Not found</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" />
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" />
<link rel="icon" href="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/main/design/favicon.ico" />
{/* Flowbite js
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script> */}
</>
