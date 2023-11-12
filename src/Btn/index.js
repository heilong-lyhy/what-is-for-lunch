import './index.css';
import { useState } from 'react';

function Btn({ic,click}){
  
  return(
    <button onClick={click}>{ic}</button>
  )
}

export default Btn;