import skills from '../api/skillData';

const SkillCard = () => {

    return (
        <div className='row'>
            {
                skills.map((skill, index) => (
                    <div className="col-md-2" key={index}>
                        <div className="skill-card">
                            <img src={skill.url} className="skill-card__image" alt={skill.title} />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default SkillCard