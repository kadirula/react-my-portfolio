import Heading from "./Heading";
import SocialBox from './SocialBox';

const Footer = () => {


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

                        <SocialBox isEmail={true} />

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