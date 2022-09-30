import { Link } from "react-router-dom";
import businessUi1 from '../assets/project/business-ui-1.png';
import { FaLink, FaGithub } from 'react-icons/fa';

const ProjectSection = () => {
    return (
        <section className="section project-section">
            <div className="row mb-5">
                <div className="col-md-12">
                    <div className="text-center">
                        <h3 className="title">PROJELERİM</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="project-card">
                        <div className="project-card__image">
                            <img src={businessUi1} alt="Business UI - 1" className="img-fluid" />
                        </div>
                        <div className="project-card__text">
                            <div className="project-card__label">
                                <span>Html</span>
                                <span>Css</span>
                                <span>JavaScript</span>
                            </div>
                            <Link to='/' className="project-card__title">Business UI - 1</Link>
                        </div>
                        <div className="project-card__hover">
                            <Link to='/' className="project-card__hover-item"><FaLink className="me-2" /> Live</Link>
                            <Link to='/' className="project-card__hover-item"><FaGithub className="me-2" /> Github</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="project-card">
                        <div className="project-card__image">
                            <img src={businessUi1} alt="Business UI - 1" className="img-fluid" />
                        </div>
                        <div className="project-card__text">
                            <div className="project-card__label">
                                <span>Html</span>
                                <span>Css</span>
                                <span>JavaScript</span>
                            </div>
                            <Link to='/' className="project-card__title">Business UI - 1</Link>
                        </div>
                        <div className="project-card__hover">
                            <Link to='/' className="project-card__hover-item"><FaLink className="me-2" /> Live</Link>
                            <Link to='/' className="project-card__hover-item"><FaGithub className="me-2" /> Github</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="project-card">
                        <div className="project-card__image">
                            <img src={businessUi1} alt="Business UI - 1" className="img-fluid" />
                        </div>
                        <div className="project-card__text">
                            <div className="project-card__label">
                                <span>Html</span>
                                <span>Css</span>
                                <span>JavaScript</span>
                            </div>
                            <Link to='/' className="project-card__title">Business UI - 1</Link>
                        </div>
                        <div className="project-card__hover">
                            <Link to='/' className="project-card__hover-item"><FaLink className="me-2" /> Live</Link>
                            <Link to='/' className="project-card__hover-item"><FaGithub className="me-2" /> Github</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection