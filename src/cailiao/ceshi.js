import Btn from "../Btn"
import { useState } from 'react';

function Side(){
  const [isclick, setisclick] = useState(true);

  function click(){
    if(isclick){
      setisclick(n => n=false)
      clicktime();
    }else{
      setisclick(n => n=true)
      
    }
  }

  function clicktime() {
    if(isclick){
      console.log(1)
      // 继续下一个文本的动画
      setTimeout(clicktime, 300);
    }
  }

  return(
    <Btn ic={isclick} click={click}/>
  )
}