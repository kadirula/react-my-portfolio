import { useState } from 'react';
import { FaSortDown, FaCaretRight } from 'react-icons/fa'

const BlogList = () => {

    return (
        <div className='blog'>
            <div className="blog__item">
                <h4 className='blog__text'>
                    <FaSortDown />
                    İnternet
                </h4>
                <div className='blog__sub'>
                    <div className="blog__sub-item">
                        <a href='#' className='blog__sub-text'>İnternet Nedir ve Nasıl Çalışır ?</a>
                        <span className='blog__date'>17 Eylül 2022</span>
                    </div>
                    <div className="blog__sub-item">
                        <a href='#' className='blog__sub-text'>İnternet Nedir ve Nasıl Çalışır ?</a>
                        <span className='blog__date'>17 Eylül 2022</span>
                    </div>
                    <div className="blog__sub-item">
                        <a href='#' className='blog__sub-text'>İnternet Nedir ve Nasıl Çalışır ?</a>
                        <span className='blog__date'>17 Eylül 2022</span>
                    </div>
                    <div className="blog__sub-item">
                        <a href='#' className='blog__sub-text'>İnternet Nedir ve Nasıl Çalışır ?</a>
                        <span className='blog__date'>17 Eylül 2022</span>
                    </div>
                </div>

            </div>
            <div className="blog__item">
                <h4 className='blog__text'>
                    <FaSortDown />
                    İnternet
                </h4>
                <div className='blog__sub'>
                    <div className="blog__sub-item">
                        <a href='#' className='blog__sub-text'>İnternet Nedir ve Nasıl Çalışır ?</a>
                        <span className='blog__date'>17 Eylül 2022</span>
                    </div>
                    <div className="blog__sub-item">
                        <a href='#' className='blog__sub-text'>İnternet Nedir ve Nasıl Çalışır ?</a>
                        <span className='blog__date'>17 Eylül 2022</span>
                    </div>
                    <div className="blog__sub-item">
                        <a href='#' className='blog__sub-text'>İnternet Nedir ve Nasıl Çalışır ?</a>
                        <span className='blog__date'>17 Eylül 2022</span>
                    </div>
                    <div className="blog__sub-item">
                        <a href='#' className='blog__sub-text'>İnternet Nedir ve Nasıl Çalışır ?</a>
                        <span className='blog__date'>17 Eylül 2022</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogList