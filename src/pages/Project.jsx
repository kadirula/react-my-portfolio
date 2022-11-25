import React, { useState, useEffect } from 'react'
import projectData from '../api/projectData'
import ProjectCard from '../components/ProjectCard'

const Project = () => {

  const [inputText, setInputText] = useState('');
  const [projects, setProjects] = useState(projectData);


  const searchHandle = (e) => {
    const value = e.target.value;
    setInputText(value)
    if (value === '') {
      setProjects(projectData)
    }
    else {
      setProjects(projects.filter(item => item.title.toLowerCase().includes(value.toLowerCase())))

    }
  }

  return (
    <div className='container'>
      <div className="row mb-5">
        <div className="col-md-12">
          <form className='search-form'>
            <input type="text" placeholder='Proje Ara...' onChange={searchHandle} value={inputText} />
          </form>
        </div>
      </div>
      <div className="row">
        {
          projects.map((project, index) => {
            return (
              <div className='col-md-4' key={index}>
                <ProjectCard project={project} />
              </div>
            )

          })
        }

      </div>
    </div>
  )
}

export default Project