import { NavLink } from 'react-router-dom'
import { FaHome, FaReadme, FaAtlas, FaRegEnvelope } from 'react-icons/fa'
import logo from '../assets/logo.png';
import { useState } from 'react';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);


    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            setIsSticky(true)
        }
        else{
            setIsSticky(false)
        }
    }

    return (
        <header className={`header ${isSticky && 'header--sticky'}`}>
            <div className="container">
                <div className="header__wrapper">
                    <nav className="header__menu header__menu--left">
                        <NavLink to='/' end className='header__menu-item'>
                            <FaHome className='header__menu-icon' /> Anasayfa
                        </NavLink>
                        <NavLink to='/project' end className='header__menu-item'>
                            <FaAtlas className='header__menu-icon' /> Projelerim
                        </NavLink>
                    </nav>
                    <div className="header__logo">
                        <NavLink to='/'>
                            <img src={logo} className='img-fluid' alt="Logo" />
                        </NavLink>
                    </div>
                    <nav className="header__menu header__menu--right">
                        <NavLink to='/blog' end className='header__menu-item'>
                            <FaReadme className='header__menu-icon' /> Blog
                        </NavLink>
                        <NavLink to='/contact' end className='header__menu-item'>
                            <FaRegEnvelope className='header__menu-icon' /> İletişim
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header