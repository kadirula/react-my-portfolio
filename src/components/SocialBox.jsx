import { FaRegEnvelopeOpen, FaLinkedinIn, FaGithub, FaMediumM, FaCodepen } from 'react-icons/fa';
import { FiCodesandbox } from 'react-icons/fi';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const SocialBox = ({ isEmail = false }) => {

  


  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#FF014F',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#FF014F',
    },
  }));

  return (
    <div className={`social-box mt-4 ${isEmail ? 'justify-content-center' : ''}`}>
      {
        isEmail &&
        <BootstrapTooltip title='Email' placement='top'>
          <a
            href='mailto:kadirula17@gmail.com'
            className="social-box__item"
          >
            <FaRegEnvelopeOpen className='social-box__icon' />
          </a>
        </BootstrapTooltip>
      }
      <BootstrapTooltip title='Linkedin' placement='top'>
        <a
          href='https://www.linkedin.com/in/kadir-ula/'
          target='_blank'
          className="social-box__item"
        >
          <FaLinkedinIn className='social-box__icon' />
        </a>
      </BootstrapTooltip>
      <BootstrapTooltip title='Github' placement='top'>
        <a
          href='https://github.com/kadirula'
          target='_blank'
          className="social-box__item"
        >
          <FaGithub className='social-box__icon' />
        </a>
      </BootstrapTooltip>
      <BootstrapTooltip title='Codepen' placement='top'>
        <a
          href='https://codepen.io/kadirula'
          className="social-box__item"
        >
          <FaCodepen className='social-box__icon' />
        </a>
      </BootstrapTooltip>
      <BootstrapTooltip title='Medium' placement='top'>
        <a
          href='https://medium.com/@kadirula17'
          target='_blank'
          className="social-box__item"
        >
          <FaMediumM className='social-box__icon' />
        </a>
      </BootstrapTooltip>
      <BootstrapTooltip title='CodeSandbox' placement='top'>
        <a
          href='https://codesandbox.io/u/kadirula'
          className="social-box__item"
        >
          <FiCodesandbox className='social-box__icon' />
        </a>
      </BootstrapTooltip>
    </div>
  )
}

export default SocialBox