import React from "react"
import AppLogo from '../images/logo.png'

import "../ComponentCSS/header.css"
console.log(AppLogo)

function Header() {
    return (
        <div className = "App-header">
            <div className = "App-logo">
                <img scr = {AppLogo} alt = "Logo" id = "Logo"></img>
            </div>
            <div className = "">
                <p>
                    this is header
                </p>
            </div>
        </div>
    )
}

export default Header;