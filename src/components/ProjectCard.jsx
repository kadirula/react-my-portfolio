import { Link } from "react-router-dom";
import { FaLink, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {

    

    return (
        <div className="project-card">
            <div className="project-card__image">
                <img src={project.image} alt="Business UI - 1" className="img-fluid" />
            </div>
            <div className="project-card__text">
                <div className="project-card__label">
                    {
                        project.tech.map((item, index) => (
                            <span key={index}>{item.name}</span>
                        ))
                    }
                </div>
                <Link to='/' className="project-card__title">{project.title}</Link>
            </div>
            <div className="project-card__hover">
                <Link to={project.liveUrl} className="project-card__hover-item"><FaLink className="me-2" /> Live</Link>
                <Link to={project.githubUrl} className="project-card__hover-item"><FaGithub className="me-2" /> Github</Link>
            </div>
        </div>
    )
}

export default ProjectCard