import './index.css';
import { useState } from 'react';

function Btn(click){
  const [isclick, setisclick] = useState(true);
  let btntext = '' 
  if(isclick){
    btntext = '开始'
  }else{
    btntext = '结束'
  }
  return(
    <button>{btntext}</button>
  )
}

export default Btn;