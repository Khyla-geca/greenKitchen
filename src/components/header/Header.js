import React from "react"

import HeaderCSS from "./Header.module.css"

const Navbar = () => {
    return (
        <>
            <div className={HeaderCSS.headerContainer}>
                <div className={HeaderCSS.headerText}>
                    <h1 className={HeaderCSS.headerH1}>Green Angel Kitchen</h1>
                    <p className={HeaderCSS.headerP}>a healthy outside starts with a healthy inside</p>
                </div>
                <div className={HeaderCSS.blackBackground}></div>
                <img 
                    src="https://www.usda.gov/sites/default/files/nal-eat-healthy-active-new-year-blog-010322.jpg" 
                    alt="kitchen"
                />
            </div>
      </> 
    )
}

export default Navbar