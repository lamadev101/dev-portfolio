import React from 'react'
import { urlFor } from '../lib/client'
import { GiWorld, GiBoltEye } from 'react-icons/gi'
import { BsGithub } from 'react-icons/bs'

const Project = ({filterProjects, setFullImg, setOpenImg, dark}) => {
  const handleClick = (img) => {
    setFullImg(img);
    setOpenImg(true);
  }

  return (
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
  )
}

export default Project