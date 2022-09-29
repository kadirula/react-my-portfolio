import { Link } from "react-router-dom";
import businessUi1 from '../assets/project/business-ui-1.png'

const ProjectSection = () => {
    return (
        <section className="section project-section">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection