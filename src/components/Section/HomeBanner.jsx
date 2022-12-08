
import HomeBannerImage from '../../assets/home-banner-bg.png'
import { motion } from "framer-motion";
import SocialBox from '../SocialBox';


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


          <SocialBox />


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