import React from 'react'
import {FiFigma} from 'react-icons/fi'
import {RiCodeSSlashFill} from 'react-icons/ri'
import {SiAltiumdesigner} from 'react-icons/si'
import {FaDatabase} from 'react-icons/fa'

const Services = () => {
  return (
    <div className='services'>
      <div className='head'>
        <div className="heading">my<span>Services</span></div>
        <div className="line" />
      </div>
      <div className="service">
        <div className="card">
          <div className="logo">
            <FiFigma className="icon"/>
          </div>
          <h3>UX/UI Design</h3>
          <p>Creating elegant designs suited for your needs following core design theory.</p>
          <h5>Tools I used</h5>
          <ul>
            <li>Figma</li>
            <li>Xd</li>
          </ul>
        </div>
        <div className="card">
          <div className="logo">
            <RiCodeSSlashFill className="icon"/>
          </div>
          <h3>Web Development</h3>
          <p>Do you have an idea for your next great website? Let's make it a reality.</p>
          <h5>Tools I used</h5>
          <ul>
            <li>HTML5 | CSS | JS | JQuery</li>
            <li>Sass | Tailwind | MUi5 | Bootstrap</li>
            <li>React | Next | Angular | Node JS</li>
            <li>Redux | Flux | Enzyme | Bable</li>
          </ul>
        </div>
        <div className="card">
          <div className="logo">
            <SiAltiumdesigner className="icon"/>
          </div>
          <h3>Graphics Design</h3>
          <p>Creating elegant designs suited for your needs following core design theory.</p>
          <h5>Tools I used</h5>
          <ul>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Figma</li>
          </ul>
        </div>
        {/* <div className="card">
          <div className="logo">
            <FaDatabase className="icon"/>
          </div>
          <h3>SQL Expert</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at autem maiores delectus minima corporis, officiis error pariatur cumque rem.</p>
        </div> */}
      </div>
    </div>
  )
}

export default Services