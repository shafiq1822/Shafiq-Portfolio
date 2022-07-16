import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <section id='contact'>
          <p>Get in Touch</p>
          <h1>Contact me</h1>
        <div className="contact__container">
         <form action="https://formsubmit.co/shafiqmohammed182@gmail.com" method="POST">
           <label htmlFor="">Name</label>
           <input type="text" name='name' placeholder='Enter your Full Name' required/>
           <label htmlFor="">Email</label>
           <input type="text" name='email' placeholder='Enter your Email Address' required/>
           <label htmlFor="">Message</label>
           <textarea name="message" id="message" cols="15" rows="6" placeholder='Enter your message'></textarea>
           <input type="submit" value="SEND MESSAGE" id='submit'/>
         </form>
        </div>
      </section>
    </>
  )
}

export default Contact