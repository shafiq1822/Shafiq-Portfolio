import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id='about'>
      <p>Get to Know</p>
      <h1>About Me</h1>
      <div className="about__container">
        <div className="about__content">
          <h1>About Me</h1>
          <p>My name is Mohammed Shafiq and I'm an aspiring Full Stack developer learning latest web technologies to build amazing products and focus on solving problems.</p>
          <a href="#contact"><button>CONTACT</button></a>
        </div>
        <div className="skill__content">
          <h1>Skills</h1>
          <div className="skills__btn">
            <button>HTML</button>
            <button>CSS</button>
            <button>Bootstrap</button>
            <button>JavaScript</button>
            <button>React</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About