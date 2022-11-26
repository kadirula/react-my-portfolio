import { FaHome, FaReadme, FaAtlas, FaRegEnvelope } from 'react-icons/fa'
import { Link } from "react-scroll";

const MobileMenu = ({ isMobile }) => {
    return (
        <div className={`header__mobile-menu ${isMobile ? 'show' : ''}`}>
            <Link className='header__mobile-menu-item' activeClass="active" smooth spy to="home" duration={200}>
                Home
            </Link>
            <Link className='header__mobile-menu-item' activeClass="active" smooth spy to="project" duration={200}>
                Resume
            </Link>
            <Link className='header__mobile-menu-item' activeClass="active" smooth spy to="resume" duration={200}>
                Project
            </Link>
            <Link className='header__mobile-menu-item' activeClass="active" smooth spy to="contact" duration={200}>
                Contact
            </Link>
        </div>
    )
}

export default MobileMenu