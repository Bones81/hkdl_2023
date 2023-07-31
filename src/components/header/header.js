import { useState } from "react"
import './header.css' 

const Header = () => {
    const [seeMenu, setSeeMenu] = useState(false)

    const toggleMenu = () => {
        const line1 = document.querySelector('.line-1')
        const line2 = document.querySelector('.line-2')
        const line3 = document.querySelector('.line-3')
        line1.classList.toggle('line-1-active')
        line2.classList.toggle('line-2-active')
        line3.classList.toggle('line-3-active')
        setSeeMenu(!seeMenu)
        const menu = document.querySelector('.menu')
        menu.classList.toggle('menu-active')
    }

    return (
        <>
            <div className="header">
                <h1><a className='title-link' href="#top">HKDL Caroler Guide 2023</a></h1>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="burger-line line-1"></div>
                    <div className="burger-line line-2"></div>
                    <div className="burger-line line-3"></div>
                </div>
            </div>
            <div className="menu">
                <ul id="navbar">
                    <li class="nav-item"><a href="#first" onClick={toggleMenu}>First Things First</a></li>
                    <li class="nav-item"><a href="#documents" onClick={toggleMenu}>Documents</a></li>
                    <li class="nav-item"><a href="#covid-clearance" onClick={toggleMenu}>COVID Clearance</a></li>
                    <li class="nav-item"><a href="#flights" onClick={toggleMenu}>Flying</a></li>
                    <li class="nav-item"><a href="#housing" onClick={toggleMenu}>Housing</a></li>
                    <li class="nav-item"><a href="#food" onClick={toggleMenu}>Food</a></li>
                    <li class="nav-item"><a href="#transportation" onClick={toggleMenu}>Transportation within HK</a></li>
                    <li class="nav-item"><a href="#money" onClick={toggleMenu}>Money/Banking</a></li>
                    <li class="nav-item"><a href="#communication" onClick={toggleMenu}>Communication</a></li>
                    <li class="nav-item"><a href="#health" onClick={toggleMenu}>Health Care</a></li>
                    <li class="nav-item"><a href="#performance" onClick={toggleMenu}>Performance</a></li>
                    <li class="nav-item"><a href="#costume-HMU" onClick={toggleMenu}>Costumes, Hair, Makeup</a></li>
                    <li class="nav-item"><a href="#leisure" onClick={toggleMenu}>Leisure/Time Off</a></li>
                    <li class="nav-item"><a href="#packing" onClick={toggleMenu}>Packing</a></li>
                    <li class="nav-item"><a href="#footer" onClick={toggleMenu}>Just For Fun</a></li>

                </ul>
            </div>
        </>
        
    )
}

export default Header