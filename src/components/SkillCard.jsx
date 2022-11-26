import skills from '../data/skillData';
import { motion } from 'framer-motion';

const SkillCard = () => {

    const skillCardAnimate = {
        offscreen: { x: 100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.7
            }
        }
    }

    return (
        <motion.div
            className='row'
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
        >
            {
                skills.map((skill, index) => (
                    <motion.div className="col-sm-4 col-md-2" key={index} variants={skillCardAnimate}>
                        <div className="skill-card">
                            <img src={skill.url} className="skill-card__image" alt={skill.title} />
                        </div>
                    </motion.div>
                ))
            }

        </motion.div>
    )
}

export default SkillCard