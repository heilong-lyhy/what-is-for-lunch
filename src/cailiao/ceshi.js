// import Btn from "../Btn"
// import { useState } from 'react';

// function Side(){
//   const [isclick, setisclick] = useState(true);

//   function click(){
//     if(isclick){
//       setisclick(n => n=false)
//       clicktime();
//     }else{
//       setisclick(n => n=true)
//     }
//   }

//   function clicktime() {
//     console.log(isclick)
//     if(isclick){
//       console.log(1)
//       setTimeout(clicktime, 300);
//     }
//   }
  

//   return(
//     <Btn ic={isclick} click={click}/>
//   )
// }
import { useState, useEffect } from 'react';

function Side() {
  const [isclick, setisclick] = useState(true);



  function click() {
    if (isclick) {
      setisclick(false);
    } else {
      setisclick(true);
    }
  }

  return (
    <Btn ic={isclick} click={click} />
  );
}
