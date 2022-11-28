import React from 'react';
import '../styles/Footer.css';
import ScrollToTop from './ScrollToTop';
import { Link as LinkRouter } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='Footer-container1'>
    <div className = 'Footer-container' >
      <div className='Footer-left'>
        <img src='https://i.imgur.com/lGiu6NV.png ' alt='logo' className='Footer-logo'></img>
      </div>
      <div className='Footer-center'>
          <div className='Footer-social'>
            <a href="https://www.facebook.com/"><img src='/img/facebook.png' alt='face' className='Footer-red'></img></a>
            <a href="https://www.instagram.com/"><img src='/img/instagram.png' alt='face' className='Footer-red'></img></a>
            <a href="https://web.telegram.org/"><img src='/img/telegram.png' alt='face' className='Footer-red'></img></a>
          </div>
          <div className='Footer-pages'>
            <LinkRouter to='/' className='links'>Home</LinkRouter>
            <LinkRouter to='/Cities' className='links'>Cities</LinkRouter>
            <LinkRouter to='/hotels' className='links'>hotels</LinkRouter> 
            
          </div>
      </div>
      <ScrollToTop/>
    </div>
    <div className='Footer-copy'>
            <p>© 2022 MyTinerary Inc. All rights reserved.</p>
      </div>
    </div>
  )
}
