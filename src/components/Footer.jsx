import { FaRegEnvelopeOpen, FaLinkedinIn, FaGithub, FaMediumM, FaBehance } from 'react-icons/fa';
import Heading from "./Heading";
import { motion } from "framer-motion";

const Footer = () => {

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

    return (
        <footer className='footer' id='contact'>
            <div className="row">
                <div className="col-md-12">
                    <Heading
                        title={`LET'S WORK TOGETHER`}
                        subTitle='You can reach me via my e-mail address or social media channels.'
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-12">
                    <div className="footer__contact">
                        <motion.div
                            className="social-box justify-content-center"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ staggerChildren: 0.3 }}
                        >
                            <motion.a
                                href='mailto:kadirula17@gmail.com'
                                className="social-box__item"
                                variants={socialItemAnimate}
                            >
                                <FaRegEnvelopeOpen className='social-box__icon' />
                            </motion.a>
                            <motion.a
                                href='https://www.linkedin.com/in/kadir-ula/'
                                target='_blank'
                                className="social-box__item"
                                variants={socialItemAnimate}
                            >
                                <FaLinkedinIn className='social-box__icon' />
                            </motion.a>
                            <motion.a
                                href='https://github.com/kadirula'
                                target='_blank'
                                className="social-box__item"
                                variants={socialItemAnimate}
                            >
                                <FaGithub className='social-box__icon' />
                            </motion.a>
                            <motion.a
                                href='https://medium.com/@kadirula17'
                                target='_blank'
                                className="social-box__item"
                                variants={socialItemAnimate}
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
                        </motion.div>

                    </div>
                </div>
            </div>
            <div className="row">
                <p className="footer__copyright text-center">
                    &copy; {new Date().getFullYear()} - All Rights Reserved by <span>Kadir Ula</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer