import './index.css';
import { useEffect,useState } from 'react';
import Btn from '../Btn'
// import React, { Component } from 'react';

function Home(){
  const [istext, setistext] = useState('什么');
  const [isclick, setisclick] = useState(false);
  const [foudlist, setfoudlist] = useState([
    "宫保鸡丁",
    "麻婆豆腐",
    "糖醋排骨",
    "叉烧包",
    "小笼包",
    "酸辣汤",
    "西红柿炒鸡蛋",
    "鱼香肉丝",
    "水煮鱼",
    "干煸四季豆",
    "寿司",
    "拉面",
    "火锅",
    "寿喜烧",
    "章鱼烧",
    "红豆蛋糕",
    "玉子烧",
    "乌冬面",
    "意大利面",
    "披萨",
    "意式咖啡",
    "青酱意面",
    "帕尔玛火腿",
    "鸡肉千层面",
    "提拉米苏",
    "意式烩饭",
    "美乃滋通心粉",
    "意式牛排",
    "法式奶油面包",
    "法式洋葱汤",
    "羊排",
    "奶油蜗牛",
    "欧式巧克力蛋糕",
    "香槟",
    "鸭肝酱",
    "法式炖鱼",
    "法式羊肉煎饼",
    "巧克力蛋糕",
    "提拉米苏",
    "冰淇淋",
    "抹茶拿铁",
    "水果沙拉",
    "芒果冰沙",
    "法式奶酪蛋糕",
    "奶茶",
    "蓝莓酥皮塔",
    "桃子果冻"
  ])


  const body = document.body;
  let text = ''
  if(isclick){
    text = '结束'
  }else{
    text = '开始'
  }

  useEffect(() => {
    let intervalId;

    function clicktime() {
      if (isclick) {
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
          const randomX = Math.random() * maxX - 70;
          const randomY = Math.random() * maxY - 70;
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
        intervalId = setTimeout(clicktime, 100);
      }
    }

    clicktime();

    return () => {
      clearTimeout(intervalId);
    };
  }, [isclick]);

  function click(){
    if(isclick){
      setisclick(false)
    }else{
      setisclick(true)
    }
  }

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

  function caidan(){
    alert('彩蛋')
    let schoollist = ["麻辣香锅","鸡排饭","石锅拌饭","嚼色炸鸡","关东煮","麻辣烫","米线","拌面","卤肉饭","猪肚鸡","自选餐","新大楼","铁板"]
    setfoudlist(schoollist)
  }


  return(
    <>
      <div className="main">
        <div className='main-native'>
          <span className='s-title'>今天中午吃<h3 className='what'>{istext}</h3></span>
          <br/>
          <Btn ic={isclick} click={click} text={text}/>
          <Btn text={'添加列表项'} click={pushlist}/>
          <Btn text={'删除列表项'} click={poplist}/>
          <Btn text={'显示当前列表'} click={showlist}/>
          <Btn text={'清空当前列表'} click={clearlist}/>
          <Btn text={'彩蛋'} click={caidan}/>
        </div>
      </div>
    </>
  )
}

export default Home;