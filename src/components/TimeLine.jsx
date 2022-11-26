import { motion } from 'framer-motion';

const TimeLine = ({ data }) => {

    const timeLineItemAnimate = {
        offscreen: { y: 100, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.5
            }
        }
    }

    return (
        <motion.div
            className='timeline'
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
        >
            <motion.div
                className="timeline__item"
                variants={timeLineItemAnimate}
            >
                <span className='timeline__h-line'></span>
                <div className="timeline__title">{data.title}</div>
                <div className="timeline__flex">
                    <div className="timeline__subtitle">
                        {data.subtitle}
                    </div>
                    <div className="timeline__label">{data.date}</div>
                </div>
                {/* <p className="timeline__description">
                    {data.desc}
                </p> */}
            </motion.div>
        </motion.div>
    )
}

export default TimeLine