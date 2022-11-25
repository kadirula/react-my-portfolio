import React from 'react'
import ComingSoonImage from '../assets/coming-soon.jpg'

const ComingSoon = () => {
  return (
    <div style={{padding: '60px 0'}}>
        <img src={ComingSoonImage} style={{width: '100%', height: '600px', objectFit: 'cover' }} alt="" />
    </div>
  )
}

export default ComingSoon