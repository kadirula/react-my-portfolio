import { Link } from "react-router-dom"
import { useState } from "react"
import { app, auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { login } from "../../reducers/authReducer";
import { useSelector, useDispatch } from 'react-redux' 
import { useNavigate } from 'react-router-dom'

const AuthForm = ({ page }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandle = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch(login( JSON.stringify(user)));
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // toast.error(errorMessage);
            });
    }

    const registerHandle = () => {

    }

    return (
        <form className="auth-form" onSubmit={loginHandle}>
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
                        <button type='submit' className="button button--blue d-block w-100">Giriş Yap</button>
                        :
                        <button type='submit' className="button button--blue d-block w-100">Kayıt Ol</button>
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