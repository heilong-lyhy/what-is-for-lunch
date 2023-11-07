import './index.css';
import { useState } from 'react';
import Btn from '../Btn'

function Home(){
  return(
    <>
      <div className="main">
        <span className='s-title'>今天中午吃<h3>什么</h3></span>
        <Btn />
      </div>
    </>
  )
}

export default Home;