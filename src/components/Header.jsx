import { NavLink } from 'react-router-dom'
import { FaHome, FaReadme, FaAtlas, FaRegEnvelope, FaBars } from 'react-icons/fa'
import logo from '../assets/logo.png';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from "@mui/material/styles";

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className='header'>
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
                    <Button
                        className='header__hamburger'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <FaBars className='header__hamburger-icon' />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <NavLink to='/' end>
                                <FaHome /> Anasayfa
                            </NavLink>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <NavLink to='/project' end>
                                <FaAtlas /> Projelerim
                            </NavLink>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <NavLink to='/blog' end>
                                <FaReadme /> Blog
                            </NavLink>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <NavLink to='/contact' end>
                                <FaRegEnvelope /> İletişim
                            </NavLink>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header