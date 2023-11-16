import './index.css';
import { useState } from 'react';
import Btn from '../Btn'
// import React, { Component } from 'react';

function Home(){
  const [istime, setistime] = useState('什么');
  const [isclick, setisclick] = useState(true);
  // let isclick = false;
  let foudlist = ['1','2','3'];
  const body = document.body;
  let text = ''
  if(isclick){
    text = '结束'
  }else{
    text = '开始'
  }
  
  
  
  //以下为点击按钮后背景渐入渐出文字的函数
  // setTimeout(() => {
  //   setistime(istime+1)
  //   console.log(istime)
  // }, 1000);
  function click(){
    if(isclick){
      setisclick(n => n=false)
      // isclick = false;
      // clear();
      clicktime();
    }else{
      setisclick(n => n=true)
      // isclick = true;
      
    }
  }


  function clicktime() {
    if(isclick){
      for (let i = 0; i < 1; i++) { // 创建1个文本
        const randomIndex = Math.floor(Math.random() * foudlist.length);
        const randomText = foudlist[randomIndex];
        setistime(randomText)
        let textElement = document.createElement("div");
        textElement.textContent = randomText;
        textElement.className = "floating-text";

        // 设置随机位置
        const maxX = window.innerWidth - textElement.clientWidth;
        const maxY = window.innerHeight - textElement.clientHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        textElement.style.left = randomX + "px";
        textElement.style.top = randomY + "px";

        // // 设置随机字体大小
        const randomSize = Math.floor(Math.random() * 30) + 12;
        textElement.style.fontSize = randomSize + "px";

        // 添加文本到页面
        body.appendChild(textElement);

        // 渐入效果
        setTimeout(() => {
          textElement.style.opacity = 1;
        }, 1000);

        // 自动移除文本
        setTimeout(() => {
          // 渐出效果
          textElement.style.opacity = 0;
          setTimeout(() => {
            body.removeChild(textElement);
          }, 1000); // 渐出效果持续2秒
        }, 2000); // 文本显示2秒后移除
      }

      // 继续下一个文本的动画
      setTimeout(clicktime, 300);
    }
  }


  //以下内容为实现列表自定义的函数
  function pushlist(){
    let newlist1 = prompt('请输入新的列表项','')
      foudlist.push(newlist1)
      console.log(foudlist)
  }

  function poplist(){
    let newlist2 = prompt('请输入新的列表项','')
      foudlist.pop(newlist2)
      console.log(foudlist)
  }

  function showlist(){
    console.log(foudlist)
  }

  function clearlist(){
    foudlist = []
    console.log(foudlist)
  }



  return(
    <>
      <div className="main">
        <span className='s-title'>今天中午吃<h3>{istime}</h3></span>
        <Btn ic={isclick} click={click} text={text}/>
        <Btn text={'添加列表项'} click={pushlist}/>
        <Btn text={'删除列表项'} click={poplist}/>
        <Btn text={'显示当前列表'} click={showlist}/>
        <Btn text={'清空当前列表'} click={clearlist}/>
      </div>
    </>
  )
}

export default Home;