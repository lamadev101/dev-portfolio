import React, { useState } from 'react'
import { GrReactjs } from 'react-icons/gr'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaJsSquare } from 'react-icons/fa'
import { GiWorld, GiBoltEye } from 'react-icons/gi'
import { BsGithub } from 'react-icons/bs'
import {FaFigma} from 'react-icons/fa'
import { urlFor } from '../lib/client'
import { useContextState } from '../context/StateContext'


const Portfolio = ({ projects }) => {
  const { dark } = useContextState();
  const [btnValue, setBtnValue] = useState("react");
  const [openImg, setOpenImg] = useState(false);
  const [fullImg, setFullImg] = useState("");

  const tags = [
    { id: 0, name: "UX/UI", key: "ui", icon: <FaFigma/>, active: "active0"},
    { id: 1, name: "React JS", key: "react", icon: <GrReactjs />, active: "active1" },
    { id: 2, name: "Next JS", key: "next", icon: <TbBrandNextjs />, active: "active2" },
    { id: 3, name: "Vanilla JS", key: "vanilla", icon: <FaJsSquare />, active: "active4" },
  ]

  const filterProjects = projects.filter(({ group }) => group === btnValue)
  
  const handleClick = (img) => {
    setFullImg(img);
    setOpenImg(true);
  }

  return (
    <div className='portfolio'>
      <div className='head'>
        <div className="heading">my<span>Portfolio</span></div>
        <div className="line" />
      </div>
      <div className="title" style={dark[1]}>
        <h3>My Last Projects</h3>
        <div className="tabs">
          {tags.map(tag => <button key={tag.id} className={tag.key == btnValue ? tag.active : ""} onClick={() => setBtnValue(tag.key)}>{tag.icon}{tag.name}</button>)}
        </div>
      </div>
      <div className="projects">
        {filterProjects.map(project => (
          <div className="project" key={project._id} style={dark[4]}>
            {project?.tools ? <>
            <img src={urlFor(project.image[0])} alt="" />
            <div className="info">
              <h3>{project.name}</h3>
              <div className='tools'>
                <div className='text'>Features & Tools</div>
                <div className='tool'>
                  {project.tools?.map(tool => (
                    <span className="tool" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="links">
                <a href={project.github} target="_blank" rel="noreferrer"><BsGithub /> www.github.com</a>
                <a href={project.website} target="_blank" rel="noreferrer"><GiWorld /> www.web-app.com</a>
              </div>
            </div></>:
            <div className='uiDesign'>
              <img src={urlFor(project.image[0])} alt=""  className='uiImg' />
              <div className='overlay'>
                <h3>{project.name}</h3>
                <button className='uiBtn' onClick={()=>handleClick(project.image[0])}>View <GiBoltEye className='eyeIcon'/></button>
              </div>
            </div>
            }
          </div>
        ))}
      </div>
      {openImg && <div className='uiFullScreen'>
        <img src={urlFor(fullImg)} alt="" /> 
        <button className='closeBtn' onClick={()=>setOpenImg(false)}>Close</button>
        </div>
      }
    </div>
  )
}

export default Portfolio