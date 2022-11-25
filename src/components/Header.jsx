import { NavLink } from 'react-router-dom'
import { FaHome, FaReadme, FaAtlas, FaRegEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png';
import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import MobileMenu from './MobileMenu';

const Header = () => {

    const [sticky, setSticky] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                setSticky(true);
            }
            else {
                setSticky(false)
            }
        });
    }, [])

    return (
        <header className={`header ${sticky ? 'sticky' : ''}`}>
            <div className="container">
                <div className="header__wrapper">
                    <nav className="header__menu header__menu--left">
                        <Link className='header__menu-item' activeClass="active" smooth spy to="home" duration={200}>
                            <FaHome className='header__menu-icon' /> Anasayfa
                        </Link>
                        <Link className='header__menu-item' activeClass="active" smooth spy to="project" duration={200}>
                            <FaAtlas className='header__menu-icon' /> Projelerim
                        </Link>
                    </nav>
                    <div className="header__logo">
                        <Link activeClass="active" smooth spy to="home" duration={200}>
                            <img src={logo} className='img-fluid' alt="Logo" />
                        </Link>
                    </div>
                    <nav className="header__menu header__menu--right">
                        <Link className='header__menu-item' activeClass="active" smooth spy to="resume" duration={200}>
                            <FaReadme className='header__menu-icon' /> Özgeçmişim
                        </Link>
                        <Link className='header__menu-item' activeClass="active" smooth spy to="contact" duration={200}>
                            <FaRegEnvelope className='header__menu-icon' /> İletişim
                        </Link>
                    </nav>

                    <button className='header__hamburger' onClick={() => setIsMobile(!isMobile)}>
                        {
                            isMobile ?
                                <FaTimes className='header__hamburger-icon' />
                                :
                                <FaBars className='header__hamburger-icon' />
                        }

                    </button>
                </div>
            </div>

            <MobileMenu isMobile={isMobile} />

        </header>
    )
}

export default Header