import { useState } from "react"
import './header.css' 

const Header = () => {
    const [mobileMode, setMobileMode] = useState(false)
    const [seeMenu, setSeeMenu] = useState(false)

    const toggleMenu = () => {
        const line1 = document.querySelector('.line-1')
        const line2 = document.querySelector('.line-2')
        const line3 = document.querySelector('.line-3')
        line1.classList.toggle('line-1-active')
        line2.classList.toggle('line-2-active')
        line3.classList.toggle('line-3-active')
        setSeeMenu(!seeMenu)
    }

    return (
        
        <div className="mobile-header">
            <h1><a href="#top">HKDL Caroler Info 2022</a></h1>
            {/* Hamburger Menu icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="burger-line line-1"></div>
                <div className="burger-line line-2"></div>
                <div className="burger-line line-3"></div>
            </div>
        </div>
    )
}

export default Header