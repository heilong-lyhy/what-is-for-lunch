import './index.css';
import { useState } from 'react';

function Btn({ic,click}){
  let btntext = '' 
  if(ic){
    btntext = '开始'
  }else{
    btntext = '结束'
  }
  return(
    <button onClick={click}>{btntext}</button>
  )
}

export default Btn;