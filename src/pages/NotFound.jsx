import React from 'react'
import ErrorImage from '../assets/404.png';
const NotFound = () => {
    return (
        <section className='section container'>
            <div className="text-center">
                <img src={ErrorImage} alt="Not Found" className='img-fluid' />
            </div>
        </section>
    )
}

export default NotFound