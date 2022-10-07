import { FaLinkedinIn, FaGithub, FaMediumM, FaBehance } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer container'>
            <div className="row mb-4">
                <div className="col-md-12">
                    <div className="text-center">
                        <h3 className="title">BİRLİKTE ÇALIŞALIM</h3>
                        <p className="title__desc">
                            İş teklifleriniz için mail adresimden veya sosyal medya kanallarımdan benimle iletişime geçebilirsiniz
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer__contact">
                        <div className="social-box justify-content-center">
                            <a href='/' className="social-box__item">
                                <FaLinkedinIn className='social-box__icon' />
                            </a>
                            <a href='/' className="social-box__item">
                                <FaGithub className='social-box__icon' />
                            </a>
                            <a href='/' className="social-box__item">
                                <FaMediumM className='social-box__icon' />
                            </a>
                            <a href='/' className="social-box__item">
                                <FaBehance className='social-box__icon' />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer