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
        const mobileMenu = document.querySelector('.mobile-menu')
        mobileMenu.classList.toggle('mobile-menu-active')
    }

    return (
        <>
            <div className="mobile-header" id="top">
                <h1><a href="#top">HKDL Caroler Info 2022</a></h1>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="burger-line line-1"></div>
                    <div className="burger-line line-2"></div>
                    <div className="burger-line line-3"></div>
                </div>
            </div>
            <div className="mobile-menu">
                <ul id="navbar">
                    <li class="nav-item"><a href="#first">First Things First</a></li>
                    <li class="nav-item"><a href="#documents">Documents</a></li>
                    <li class="nav-item"><a href="#covid-clearance">COVID Clearance</a></li>
                    <li class="nav-item"><a href="#flights">Flying</a></li>
                    <li class="nav-item"><a href="#voting">VOTE!</a></li>
                    <li class="nav-item"><a href="#housing">Housing</a></li>
                    <li class="nav-item"><a href="#food">Food</a></li>
                    <li class="nav-item"><a href="#transportation">Transportation within HK</a></li>
                    <li class="nav-item"><a href="#money">Money/Banking</a></li>
                    <li class="nav-item"><a href="#communication">Communication</a></li>
                    <li class="nav-item"><a href="#health">Health Care</a></li>
                    <li class="nav-item"><a href="#performance-links">Performance</a></li>
                    <li class="nav-item"><a href="#costume-HMU">Costumes, Hair, Makeup</a></li>
                    <li class="nav-item"><a href="#leisure">Leisure/Time Off</a></li>
                    <li class="nav-item"><a href="#packing">Packing</a></li>
                </ul>
            </div>
        </>
        
    )
}

export default Header