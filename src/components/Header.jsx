import { NavLink } from 'react-router-dom'
import { FaHome, FaProjectDiagram, FaFileSignature, FaSignInAlt } from 'react-icons/fa'

const Header = () => {
    return (
        <header className='header'>
            <div className="header__wrapper container">
                <NavLink to='/' className="header__logo">
                    KADIR
                </NavLink>
                <nav className='header__menu'>
                    <NavLink to='/' end className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        <FaHome /> Anasayfa
                    </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        <FaFileSignature /> Yazılarım
                    </NavLink>
                    <NavLink to='/project' className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        <FaProjectDiagram /> Projelerim
                    </NavLink>
                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        <FaSignInAlt/> Giriş Yap
                    </NavLink>
                </nav>
            </div>

        </header>
    )
}

export default Header