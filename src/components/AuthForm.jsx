import { Link } from "react-router-dom"
import { useState } from "react"

const AuthForm = ({ page }) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandle = () => {

    }

    const registerHandle = () => {

    }

    return (
        <form className="auth-form">
            <div className="auth-form__item">
                <label className="form-label">E-mail</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="auth-form__item">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="auth-form__item">
                {
                    page === 'login' ?
                        <button className="button button--blue d-block w-100">Giriş Yap</button>
                        :
                        <button className="button button--blue d-block w-100">Kayıt Ol</button>
                }
            </div>
            <div className="auth-form__item">
                {
                    page === 'login' ?
                        <p className="auth-form__desc">Bir hesabınız yok mu ? <Link to='/register'>Kayıt Ol</Link></p>
                        :
                        <p className="auth-form__desc">Zaten bir hesabınız mı var ? <Link to='/login'>Giriş Yap</Link></p>

                }
            </div>
        </form>
    )
}

export default AuthForm