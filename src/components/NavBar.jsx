import React, { useEffect } from 'react'
import { navLinks } from '../constants'
import { useState } from 'react'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(true);
        }

        window.addEventListener("scroll", handleScroll)

        return () => removeEventListener("scroll", handleScroll);
    }, [])
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
            <a className="logo" href="#hero">
                Vincent
            </a>

            <nav className="desktop">
                <ul>
                    {navLinks.map((navLink, index) => (
                        <li key={index} className="group">
                            <a href={navLink.link}>
                                <span>{navLink.name}</span>
                                <span className="underline"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href="#contact" className="contact-btn">
                <div className="inner">
                    <span>Contact me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar