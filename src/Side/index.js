import Btn from "../Btn"

function Side(){
  // const [isclick, setisclick] = useState(false);
  let isclick = false

  //以下为测试用模块
  // const [istime, setistime] = useState(0);
  // setTimeout(() => {
  //   setistime(istime+1)
  //   console.log(istime)
  // }, 1000);

  function click(){
    if(isclick){
      // setisclick(false)
      isclick = false
    }else{
      // setisclick(true)
      isclick = true
      clicktime();
    }
  }
  function clicktime(){
    if(isclick){
      // for (){}
      setTimeout(clicktime, 300);
    }
    //内容简化掉了，总之就是让背景上出现一个拥有渐入渐出文字效果的div，每隔1s会重复运行，开关会跟随isclick改变（理应是这样）
  }

  return(
    <Btn ic={isclick} click={click}/>
  )
}

//出现问题：在使用let定义变量isclick时，函数clicktime可正常运行（点击按钮出现效果，再点一次关闭）
//但是Btn组件的btntext的显示不能正常切换（永远停留在'开始')

//如果使用state创建isclick，函数clicktime无法正常运行（无论怎么点都没有用）

//如果使用let定义变量isclick，启用测试用模块，函数clicktime只能打开不能关闭
//(如果多次点击开始按钮，将会重复触发，但是就是不能关，且Btn组件的btntext的显示不能正常切换（永远停留在'开始'）)