import React from "react"
import {Link} from "react-router-dom"

import ErrorCSS from "./Error.module.css"

const Error = () => {
    return (
        <div className={ErrorCSS.errorContainer}>
            <h1 className={ErrorCSS.error}>This page doesn't exist</h1>
            <Link to="/"><button className={ErrorCSS.errorBtn}>Home Page</button></Link>
        </div>
    )
}

export default Error