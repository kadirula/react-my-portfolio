import { FaRegEnvelopeOpen, FaLinkedinIn, FaGithub, FaMediumM, FaBehance } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer container'>
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <h3 className="title">BİRLİKTE ÇALIŞALIM</h3>
                        <p className="title__desc">
                            Mail adresimden veya sosyal medya kanallarımdan benimle iletişime geçebilirsiniz
                        </p>
                    </div>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-12">
                    <div className="footer__contact">
                        <div className="social-box justify-content-center">
                            <a href='mailto:kadirula17@gmail.com' className="social-box__item">
                                <FaRegEnvelopeOpen className='social-box__icon' />
                            </a>
                            <a href='https://www.linkedin.com/in/kadir-ula/' target='_blank' className="social-box__item">
                                <FaLinkedinIn className='social-box__icon' />
                            </a>
                            <a href='https://github.com/kadirula' target='_blank' className="social-box__item">
                                <FaGithub className='social-box__icon' />
                            </a>
                            <a href='https://medium.com/@kadirula17' target='_blank' className="social-box__item">
                                <FaMediumM className='social-box__icon' />
                            </a>
                            <a href='/' className="social-box__item">
                                <FaBehance className='social-box__icon' />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <p className="footer__copyright text-center">
                    &copy; {new Date().getFullYear()} - Tüm Hakları <span>Kadir Ula</span> ' ya aittir.
                </p>
            </div>
        </footer>
    )
}

export default Footer