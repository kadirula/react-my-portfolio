import { Link } from "react-router-dom";
import businessUi1 from '../assets/project/business-ui-1.png';
import businessUi2 from '../assets/project/business-ui-2.png';
import businessUi3 from '../assets/project/business-ui-3.png';
import movieProject from '../assets/project/movie-project.png';
import blogApp from '../assets/project/firebase-react-blog-app.png';
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
                            <img src={movieProject} alt="TMDB Movie Project" className="img-fluid" />
                        </div>
                        <div className="project-card__text">
                            <div className="project-card__label">
                                <span>React</span>
                                <span>Sass</span>
                            </div>
                            <Link to='/' className="project-card__title">TMDB Movie Project</Link>
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
                            <img src={businessUi2} alt="Business UI - 2" className="img-fluid" />
                        </div>
                        <div className="project-card__text">
                            <div className="project-card__label">
                                <span>Html</span>
                                <span>Css</span>
                                <span>JavaScript</span>
                            </div>
                            <Link to='/' className="project-card__title">Business UI - 2</Link>
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
                            <img src={blogApp} alt="Firebase React Blog App" className="img-fluid" />
                        </div>
                        <div className="project-card__text">
                            <div className="project-card__label">
                                <span>React</span>
                                <span>Sass</span>
                            </div>
                            <Link to='/' className="project-card__title">Firebase React Blog App</Link>
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
                            <img src={businessUi3} alt="Business UI - 3" className="img-fluid" />
                        </div>
                        <div className="project-card__text">
                            <div className="project-card__label">
                                <span>Html</span>
                                <span>Css</span>
                                <span>JavaScript</span>
                            </div>
                            <Link to='/' className="project-card__title">Business UI - 3</Link>
                        </div>
                        <div className="project-card__hover">
                            <Link to='/' className="project-card__hover-item"><FaLink className="me-2" /> Live</Link>
                            <Link to='/' className="project-card__hover-item"><FaGithub className="me-2" /> Github</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-12">
                    <div className="text-center">
                        <Link to='/' className="button">Load More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection