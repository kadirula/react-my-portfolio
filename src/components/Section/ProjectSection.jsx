import projectData from '../../data/projectData';
import ProjectCard from "../ProjectCard";
import Heading from "../Heading";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PuffLoader from 'react-spinners/PuffLoader'

const ProjectSection = () => {

  const [projects] = useState(projectData);
  const [visibleItem, setVisibleItem] = useState(6);
  const [totalItems] = useState(projectData.length);
  const [loading, setLoading] = useState(false);

  const showMoreItems = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleItem(visibleItem + 6)
      setLoading(false);
    }, 1400);
  }

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-12">
          <Link to='/project'>
            <Heading title='PROJECTS' />
          </Link>
        </div>
      </div>
      <div className="row">
        {
          projects.slice(0, visibleItem).map((project, index) => {
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
        {
          loading &&
          <div className="col-md-12 my-5">
            <div className="d-flex align-items-center justify-content-center">
              <PuffLoader loading={loading} color='#FF014F' size={150} />
            </div>
          </div>
        }
        {
          visibleItem < totalItems &&
          <div className="col-md-12">
            <div className="text-center">
              <button className='button' onClick={showMoreItems}>Load More</button>
            </div>
          </div>
        }

      </div>
    </>
  )
}

export default ProjectSection