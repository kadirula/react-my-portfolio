import projectData from '../../data/projectData';
import ProjectCard from "../ProjectCard";
import Heading from "../Heading";
import { Link } from 'react-router-dom';

const ProjectSection = () => {

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-12">
          <Link to='/project'>
            <Heading title='PROJELERİM' />
          </Link>
        </div>
      </div>
      <div className="row">
        {
          projectData.map((project, index) => {
            if (project.homeShow) {
              return (
                <div className="col-md-6 col-lg-4" key={index}>
                  <ProjectCard project={project} />
                </div>
              )
            }
            return false

          })
        }

      </div>
    </>
  )
}

export default ProjectSection