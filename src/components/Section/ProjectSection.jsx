import projectData from '../../api/projectData';
import ProjectCard from "../ProjectCard";
import Heading from "../Heading";

const ProjectSection = () => {

  return (
    <div>
      <div className="row mb-5">
        <div className="col-md-12">
          <Heading title='PROJELERİM' />
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
    </div>
  )
}

export default ProjectSection