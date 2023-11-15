import './index.css';
// import { useState } from 'react';

function Btn({ic,click,text}){
  let btntext = ''
  if(ic){
    btntext = '结束'
  }else{
    btntext = '开始'
  }
  return(
    <button onClick={click}>{btntext},{text}</button>
  )
}

export default Btn;