import { NavLink } from 'react-router-dom'
import { FaHome, FaProjectDiagram, FaFileSignature, FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../reducers/authReducer';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    
    const user = useSelector((state) => state.auth.user);


    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

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
                    {
                        !user ?
                            <NavLink to='/login' className={({ isActive }) => (isActive ? 'active-link' : '')}>
                                <FaSignInAlt /> Giriş Yap
                            </NavLink>
                            :
                            <button onClick={handleLogout} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                                <FaSignInAlt /> Çıkış Yap
                            </button>
                    }

                </nav>
            </div>

        </header>
    )
}

export default Header