import './index.css';
import { useState } from 'react';
import Btn from '../Btn'

function Home(){
  const [isclick, setisclick] = useState(true);
  let foudlist = ['1','2','3']
  const body = document.body;


  function clicktime() {
    for (let i = 0; i < 1; i++) { // 创建三个文本
      const randomIndex = Math.floor(Math.random() * foudlist.length);
      const randomText = foudlist[randomIndex];
      const textElement = document.createElement("div");
      textElement.textContent = randomText;
      textElement.className = "floating-text";

      // 设置随机位置
      const maxX = window.innerWidth - textElement.clientWidth;
      const maxY = window.innerHeight - textElement.clientHeight;
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
      textElement.style.left = randomX + "px";
      textElement.style.top = randomY + "px";

      // 设置随机字体大小
      const randomSize = Math.floor(Math.random() * 30) + 12;
      textElement.style.fontSize = randomSize + "px";

      // 添加文本到页面
      body.appendChild(textElement);

      // 渐入效果
      setTimeout(() => {
        textElement.style.opacity = 1;
      }, 0);

      // 自动移除文本
      setTimeout(() => {
        // 渐出效果
        textElement.style.opacity = 0;
        setTimeout(() => {
          body.removeChild(textElement);
        }, 2000); // 渐出效果持续2秒
      }, 2000); // 文本显示2秒后移除
    }

    // 继续下一个文本的动画
    setTimeout(clicktime, 400);
  }



  function click(){
    if(isclick){
      clicktime();
      setisclick(false)
    }else{
      setisclick(true)
    }
  }



  return(
    <>
      <div className="main">
        <span className='s-title'>今天中午吃<h3>什么</h3></span>
        <Btn ic={isclick} click={click}/>
      </div>
    </>
  )
}

export default Home;