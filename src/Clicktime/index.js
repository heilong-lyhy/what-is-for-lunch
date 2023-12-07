import React, { Component } from 'react';

function Clicktime(){
  constructor() {
    super();
    this.state = {
      isAnimating: false,
      textElements: [],
      yourTexts: ["文本1", "文本2", "文本3", "文本4", "文本5"]
    };
  }

  toggleAnimation = () => {
    if (this.state.isAnimating) {
      // 停止特效并清空文本元素数组
      this.state.textElements.forEach(textElement => textElement.timer && clearTimeout(textElement.timer));
      this.setState({
        isAnimating: false,
        textElements: []
      });
    } else {
      // 开始特效
      this.setState({ isAnimating: true });
      this.animateText();
    }
  }

  animateText = () => {
    if (this.state.isAnimating) {
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * this.state.yourTexts.length);
        const randomText = this.state.yourTexts[randomIndex];

        // 创建文本元素
        const textElement = (
          <div
            key={Date.now() + i}
            className="floating-text"
            style={{
              left: `${Math.random() * (window.innerWidth - 100)}px`,
              top: `${Math.random() * (window.innerHeight - 50)}px`,
              fontSize: `${Math.floor(Math.random() * 30) + 12}px`,
              opacity: 0
            }}
          >
            {randomText}
          </div>
        );

        // 添加文本元素到数组
        this.setState(prevState => ({
          textElements: [...prevState.textElements, textElement]
        }));

        // 设置渐入效果
        setTimeout(() => {
          textElement.props.style.opacity = 1;
          this.forceUpdate(); // 更新渲染以应用样式
        }, 0);

        // 设置渐出效果并移除文本元素
        textElement.timer = setTimeout(() => {
          textElement.props.style.opacity = 0;
          this.forceUpdate(); // 更新渲染以应用样式
          setTimeout(() => {
            this.setState(prevState => ({
              textElements: prevState.textElements.filter(elem => elem !== textElement)
            }));
          }, 1000); // 渐出效果持续1秒
        }, 2000); // 文本显示2秒后移除
      }

      // 继续下一个文本的动画
      setTimeout(this.animateText, 2000);
    }
  }


  return (
    <div>
      <button onClick={this.toggleAnimation}>
        {this.state.isAnimating ? "归队" : "开始特效"}
      </button>
      {this.state.textElements}
    </div>
  );
}

export default Clicktime;

function clicktime() {
  if(isclick){
    for (let i = 0; i < 1; i++) { // 创建1个文本
      setclickkey(n => n+1)
      const randomIndex = Math.floor(Math.random() * foudlist.length);
      const randomText = foudlist[randomIndex];
      setistext(randomText)
      const textElement = (
        <div className="floating-text" key={clickkey} 
        style={{position:"absolute",
        left:`${Math.random() * (window.innerWidth - 100)}px`,
        top:`${Math.random() * (window.innerHeight - 70)}px`,
        fontSize: `${Math.floor(Math.random() * 30) + 12}px`,
        opacity: 0,
        transition: 'opacity 2s',
        }}>{istext}</div>
      )
      // 添加文本到页面
      settextElements(textElements.push(textElement));

      // 渐入效果
      setTimeout(() => {
        textElement.props.style.opacity = 1;
        // this.forceUpdate();
      }, 1000);

      // 自动移除文本
      setTimeout(() => {
        // 渐出效果
        textElement.props.style.opacity = 0;
        setTimeout(() => {
          settextElements(textElements.filter(elem => elem !== textElements))
          // this.forceUpdate();
        }, 1000); // 渐出效果持续2秒
      }, 2000); // 文本显示2秒后移除
    }

    // 继续下一个文本的动画
    setTimeout(clicktime, 300);
  }
  return(
  <>
  {textElements}
  </>
  )
}