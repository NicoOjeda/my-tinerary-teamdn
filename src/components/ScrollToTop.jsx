import '../styles/ScrollToTop.css'

import React from 'react'

export default function ScrollToTop() {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };
    // console.log(window)
    return (
    <button onClick={scrollToTop} className='Footer-left'>
        <img src='/img/up-arrow.png' alt='face' className='Footer-arrow'></img>
    </button>
  )
}
