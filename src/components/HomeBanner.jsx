import { NavLink } from 'react-router-dom'
import { FaLinkedinIn, FaGithub, FaMediumM, FaBehance } from 'react-icons/fa';

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner__content">
        <h1 className="home-banner__title">KADİR ULA</h1>
        <h4 className="home-banner__sub-title">FRONTEND DEVELOPER</h4>
        <p className="home-banner__desc">
          Hello, I'm Kadir. I am developing myself on HTML5, CSS3 and JavaScript technologies. I have been dealing with web software for over 6 years. With the experience I have gained, I have the necessary knowledge and skills to make your projects successful.
        </p>
        <div className="home-banner__social">
          <a href='/' className="home-banner__social-item">
            <FaLinkedinIn className='home-banner__social-icon' />
          </a>
          <a href='/' className="home-banner__social-item">
            <FaGithub className='home-banner__social-icon' />
          </a>
          <a href='/' className="home-banner__social-item">
            <FaMediumM className='home-banner__social-icon' />
          </a>
          <a href='/' className="home-banner__social-item">
            <FaBehance className='home-banner__social-icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner