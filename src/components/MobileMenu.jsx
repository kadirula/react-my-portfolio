import { FaHome, FaReadme, FaAtlas, FaRegEnvelope } from 'react-icons/fa'
import { Link } from "react-scroll";

const MobileMenu = ({ isMobile }) => {
    return (
        <div className={`header__mobile-menu ${isMobile ? 'show' : ''}`}>
            <Link className='header__mobile-menu-item' activeClass="active" smooth spy to="home" duration={200}>
                Anasayfa
            </Link>
            <Link className='header__mobile-menu-item' activeClass="active" smooth spy to="project" duration={200}>
                Projelerim
            </Link>
            <Link className='header__mobile-menu-item' activeClass="active" smooth spy to="resume" duration={200}>
                Özgeçmişim
            </Link>
            <Link className='header__mobile-menu-item' activeClass="active" smooth spy to="contact" duration={200}>
                İletişim
            </Link>
        </div>
    )
}

export default MobileMenu