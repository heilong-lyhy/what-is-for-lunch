import { useRef, useState } from 'react';



function Clicktime({cisclick,cfoudlist = []}){
  const refOBJ = useRef()
  if(cisclick){
    for (let i = 0; i < 1; i++) { // 创建1个文本
      const randomIndex = Math.floor(Math.random() * cfoudlist.length);
      var randomText = cfoudlist[randomIndex];
      // let textElement = document.createElement("div");
      // textElement.textContent = randomText;
      // textElement.className = "floating-text";


      // 设置随机位置
      const maxX = window.innerWidth;
      const maxY = window.innerHeight;
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
      refOBJ.current.style.left = randomX + "px";
      refOBJ.current.style.top = randomY + "px";

      // // 设置随机字体大小
      const randomSize = Math.floor(Math.random() * 30) + 12;
      refOBJ.current.style.fontSize = randomSize + "px";

      // 添加文本到页面
      

      // 渐入效果
      setTimeout(() => {
        refOBJ.current.style.opacity = 1;
      }, 1000);

      // 自动移除文本
      setTimeout(() => {
        // 渐出效果
        refOBJ.current.style.opacity = 0;
         // 渐出效果持续2秒
      }, 1000); // 文本显示2秒后移除
    }

    // 继续下一个文本的动画
    setTimeout(Clicktime, 300);
  }
  return(
    <div className='floating-text' ref={refOBJ}>{randomText}</div>
  )
}

export default Clicktime;