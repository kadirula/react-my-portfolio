import { Link } from "react-router-dom";
import { FaLink, FaGithub } from 'react-icons/fa';
import projectData from '../../api/projectData';
import ProjectCard from "../ProjectCard";

const ProjectSection = () => {

  return (
    <div>
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="text-center">
            <h3 className="title">PROJELERİM</h3>
          </div>
        </div>
      </div>
      <div className="row">
        {
          projectData.map((project, index) => {
            if (project.homeShow) {
              return (
                <div className="col-md-6 col-lg-4" key={project.id}>
                  <ProjectCard project={project} />
                </div>
              )
            }
            return false

          })
        }

      </div>
    </div>
  )
}

export default ProjectSection