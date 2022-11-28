import { FaLinkedinIn, FaGithub, FaMediumM, FaBehance } from 'react-icons/fa';
import HomeBannerImage from '../../assets/home-banner-bg.png'
import { motion, Variants } from "framer-motion";

const HomeBanner = () => {

  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1
      }
    }
  }
  const socialItemAnimate = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5
      }
    }
  }
  const textAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.6
      }
    }
  }

  return (
    <motion.div
      className="home-banner"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="home-banner__content">
        <div className="home-banner__info">
          <motion.div
            variants={textAnimate}
          >
            <h1 className="home-banner__title">KADİR ULA</h1>
            <h4 className="home-banner__sub-title">FRONTEND DEVELOPER</h4>
            <p className="home-banner__desc">
              Hello, I'm Kadir. I am developing myself on HTML5, CSS3 and JavaScript technologies. I have been dealing with web software for over 6 years. With the experience I have gained, I have the necessary knowledge and skills to make your projects successful.
            </p>
          </motion.div>
          <div className="social-box mt-4">
            <motion.a
              href='https://www.linkedin.com/in/kadir-ula/'
              variants={socialItemAnimate}
              target='_blank'
              className="social-box__item"
            >
              <FaLinkedinIn className='social-box__icon' />
            </motion.a>
            <motion.a
              href='https://github.com/kadirula'
              variants={socialItemAnimate}
              target='_blank'
              className="social-box__item"
            >
              <FaGithub className='social-box__icon' />
            </motion.a>
            <motion.a
              href='https://medium.com/@kadirula17'
              variants={socialItemAnimate}
              target='_blank'
              className="social-box__item"
            >
              <FaMediumM className='social-box__icon' />
            </motion.a>
            <motion.a
              href='/'
              className="social-box__item"
              variants={socialItemAnimate}
            >
              <FaBehance className='social-box__icon' />
            </motion.a>
          </div>
        </div>
        <motion.div
          variants={imageAnimate}
          className='home-banner__image'
        >
          <img src={HomeBannerImage} className='img-fluid' alt="" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HomeBanner