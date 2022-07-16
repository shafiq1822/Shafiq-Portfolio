import React from 'react'
import './Nav1.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{FiGrid} from 'react-icons/fi'
import{BiMessageSquareDetail} from 'react-icons/bi'


const Nav1 = () => {
  return (
    <nav>
    <a href="#"><AiOutlineHome/></a>
    <a href="#about"><AiOutlineUser/></a>
    <a href="#projects"><FiGrid/></a>
    <a href="#contact"><BiMessageSquareDetail/></a>
  </nav>
    )
}

export default Nav1