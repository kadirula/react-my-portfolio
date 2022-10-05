import React from 'react'

const TimeLine = ({ data }) => {
    return (
        <div className='timeline'>
            <div className="timeline__item">
                <span className='timeline__h-line'></span>
                <div className="timeline__title">{data.title}</div>
                <div className="timeline__flex">
                    <div className="timeline__subtitle">
                        {data.subtitle}
                    </div>
                    <div className="timeline__label">{data.date}</div>
                </div>
                <p className="timeline__description">
                    {data.desc}
                </p>

            </div>
        </div>
    )
}

export default TimeLine