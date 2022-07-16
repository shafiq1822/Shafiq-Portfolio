import React from 'react'
import './Projects.css'
import IMG1 from '../../images/screely-quiz-app.png'
import IMG2 from '../../images/screely-Todo-app.png'
import IMG3 from '../../images/screely-weather-app.png'
import IMG4 from '../../images/screely-wix.png'
import IMG5 from '../../images/bookstore.png'
import IMG6 from '../../images/expense-tracker.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Quiz app using React',
    github: 'https://github.com/shafiq1822/quiz-app/tree/main/src',
    demo: 'https://62d18fcbf047fa3e255828fe--stellar-macaron-a2a0cf.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Todo App using React',
    github: 'https://github.com/shafiq1822/new-react-todo',
    demo: 'https://6267ad33c92b2574133f7884--flourishing-pithivier-70af8a.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: "Weather app using React",
    github: 'https://github.com/shafiq1822/weather-app',
    demo: 'https://cosmic-pony-b025e5.netlify.app/'
  },
  {
    id: 3,
    image: IMG4,
    title: " Wix webite's Clone using HTML, CSS & Bootstrap",
    github: 'https://github.com/shafiq1822/WIX-',
    demo: 'https://vermillion-babka-9f46a3.netlify.app'
  },

  {
    id: 5,
    image: IMG5,
    title: "E-commerce Bookstore using vanilla JavaScript, HTML, CSS",
    github: 'https://github.com/shafiq1822/Bookstore---1',
    demo: 'https://cool-mochi-97d009.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: "Expense Tracker using HTML, CSS and JavaScript",
    github: 'https://github.com/shafiq1822/Expense-tracker/tree/main/Expense-tracker',
    demo: 'https://spiffy-sprite-c050cb.netlify.app/'
  },
  
  
]

const Portfolio = () => {
  return (
    <section id='projects'>
      <p>My Recent</p>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

