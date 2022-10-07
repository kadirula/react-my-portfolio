import { NavLink } from 'react-router-dom'
import { FaLinkedinIn, FaGithub, FaMediumM, FaBehance } from 'react-icons/fa';
import HomeBannerImage from '../../assets/home-banner-bg.png'

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner__content">
        <div className="home-banner__info">
          <h1 className="home-banner__title">KADİR ULA</h1>
          <h4 className="home-banner__sub-title">FRONTEND DEVELOPER</h4>
          <p className="home-banner__desc">
            Hello, I'm Kadir. I am developing myself on HTML5, CSS3 and JavaScript technologies. I have been dealing with web software for over 6 years. With the experience I have gained, I have the necessary knowledge and skills to make your projects successful.
          </p>
          <div className="social-box mt-4">
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
        <div className='home-banner__image'>
          <img src={HomeBannerImage} className='img-fluid' alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner