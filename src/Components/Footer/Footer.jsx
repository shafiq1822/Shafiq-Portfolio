import React from 'react'
import './Footer.css'
import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'

import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <section id='footer'>
            <div className="footer__container">
                <div className="footer__about">
                    <h2>Mohammed Shafiq</h2>
                    <br />
                    <p>Aspiring Full Stack developer learning latest web technologies to build amazing products and focus on solving problems.</p>
                </div>
                <div className="footer__social-icons">
                    <h2>Socials</h2>
                    <br/>
                    <a href="https://github.com/shafiq1822" target="_blank"><SiGithub className='git1' /></a>
                    <a href="https://www.linkedin.com/in/shafiq-mohammed-224861144/" target="_blank"><SiLinkedin className='linkedin1'/></a>
                    <a href="https://app.netlify.com/teams/shafiqmohammed182/overview" target="_blank"><SiNetlify className='netlify1'/></a>
                </div>
            </div>
            <br />
            <div className="hr"></div>
            <div className="copyright">
                <AiOutlineCopyrightCircle className='copy'/> 
                <p>Copyright 2022. Made by <span className='footer__name'>Mohammed Shafiq</span></p>
            </div>

        </section>
    )
}

export default Footer