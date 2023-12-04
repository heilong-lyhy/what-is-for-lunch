import './index.css';
import { useEffect,useState } from 'react';
import Btn from '../Btn'
// import React, { Component } from 'react';

function Home(){
  const [istext, setistext] = useState('什么');
  const [foudlist, setfoudlist] = useState(['1','2','3'])
  const [textElements, settextElements] = useState([])
  const [clickkey, setclickkey] = useState(0);
  const [isclick, setisclick] = useState(true);
  // let isclick = false;
  // let foudlist = ['1','2','3'];
  const body = document.body;
  let text = ''
  let torf = false
  if(isclick){
    text = '开始'
  }else{
    text = '结束'
  }
  
  
  
  //以下为点击按钮后背景渐入渐出文字的函数
  // setTimeout(() => {
  //   setistime(istime+1)
  //   console.log(istime)
  // }, 1000);
  function click(){
    if(isclick){
      clicktime();
      setisclick(false)
      torf = false
    }else{
      setisclick(true)
      torf = true
    }
  }


  function clicktime() {
    if(isclick){
      for (let i = 0; i < 1; i++) { // 创建1个文本
        const randomIndex = Math.floor(Math.random() * foudlist.length);
        const randomText = foudlist[randomIndex];
        setistext(randomText)
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


  // function clicktime(clickis) {
  //   if(clickis === false){
  //     for (let i = 0; i < 1; i++) { // 创建1个文本
  //       setclickkey(n => n+1)
  //       const randomIndex = Math.floor(Math.random() * foudlist.length);
  //       const randomText = foudlist[randomIndex];
  //       setistext(randomText)
  //       const textElement = (
  //         <div className="floating-text" key={clickkey} 
  //         style={{position:"absolute",
  //         left:`${Math.random() * (window.innerWidth - 100)}px`,
  //         top:`${Math.random() * (window.innerHeight - 50)}px`,
  //         fontSize: `${Math.floor(Math.random() * 30) + 12}px`,
  //         opacity: 0,
  //         transition: 'opacity 2s',
  //         }}>{istext}</div>
  //       )
  //       // 添加文本到页面
  //       settextElements(textElements.push(textElement));

  //       // 渐入效果
  //       setTimeout(() => {
  //         textElement.props.style.opacity = 1;
  //         // this.forceUpdate();
  //       }, 1000);

  //       // 自动移除文本
  //       setTimeout(() => {
  //         // 渐出效果
  //         textElement.props.style.opacity = 0;
  //         setTimeout(() => {
  //           settextElements(textElements.filter(elem => elem !== textElements))
  //           // this.forceUpdate();
  //         }, 1000); // 渐出效果持续2秒
  //       }, 2000); // 文本显示2秒后移除
  //     }

  //     // 继续下一个文本的动画
  //     setTimeout(clicktime, 300);
  //   }
  // }

  //以下内容为实现列表自定义的函数
  function pushlist(){
    let newlist1 = foudlist
    let newlistchild1 = prompt('请输入新的列表项','')
    if(newlistchild1 !== null){
      newlist1.push(newlistchild1)
    }
    setfoudlist(newlist1)
    console.log(newlist1)
  }

  function poplist(){
    let newlist2 = foudlist
    let newlistchild2 = prompt('请输入要删除的列表项','')
    newlist2 = newlist2.filter(arr => arr !== newlistchild2)
    setfoudlist(newlist2)
    console.log(newlist2)
  }

  function showlist(){
    alert(foudlist)
    console.log(foudlist)
  }

  function clearlist(){
    setfoudlist([])
    console.log(foudlist)
  }



  return(
    <>
      <div className="main">
        <span className='s-title'>今天中午吃<h3>{istext}</h3></span>
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