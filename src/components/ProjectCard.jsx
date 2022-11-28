import { Link } from "react-router-dom";
import { FaLink, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {

    const projectCardAnimate = {
        offscreen: { y: 100, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1
            }
        }
    }


    return (
        <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
        >
            <motion.div
                className="project-card"
                variants={projectCardAnimate}
            >
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
                    <div className="project-card__title">{project.title}</div>
                </div>
                <div className="project-card__hover">
                    <a href={project.liveUrl} target='_blank' className="project-card__hover-item"><FaLink className="me-2" /> Live</a>
                    <a href={project.githubUrl} target='_blank' className="project-card__hover-item"><FaGithub className="me-2" /> Github</a>
                </div>
            </motion.div>

        </motion.div>
    )
}

export default ProjectCard