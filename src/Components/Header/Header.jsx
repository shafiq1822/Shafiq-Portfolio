import React from 'react'
import './Header.css'
import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import resume from '../../resume/Resume_Mohammed_Shafiq.pdf'

const Header = () => {
  return (
    <section id='home'>
      <div className="header__content">
      <h1>Hello I'm</h1>
      <p className='name'>Mohammed Shafiq</p>
      <h3>Full Stack Web Developer</h3>
      </div>
      <div className="header__cta">
        <a href={resume} download><button className='btn-1'> RESUME</button></a>
        <a href="#contact"><button className='btn-2'>CONTACT</button></a>
      </div>
      <div className="social__icons">
        <a href="https://github.com/shafiq1822" target='_blank'><SiGithub className='git'/></a>
        <a href="https://www.linkedin.com/in/shafiq-mohammed-224861144/" target='_blank'><SiLinkedin className='linkedin'/></a>
        <a href="https://app.netlify.com/teams/shafiqmohammed182/overview" target="_blank"><SiNetlify className='netlify'/></a>
        </div>
        <a href='#about' className='mouse'>
          <span href='#about' className='mouse-wheel'></span>
        </a>
    </section>
  )
}

export default Header