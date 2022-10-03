import React from 'react'

const TimeLine = ({ educationItem }) => {
    return (
        <div className='timeline'>
            <div className="timeline__item">
                <span className='timeline__h-line'></span>
                <div className="timeline__title">{educationItem.title}</div>
                <div className="timeline__flex">
                    <div className="timeline__subtitle">
                        {educationItem.subtitle}
                    </div>
                    <div className="timeline__label">{educationItem.date}</div>
                </div>
                <p className="timeline__description">
                    {educationItem.desc}
                </p>

            </div>
        </div>
    )
}

export default TimeLine