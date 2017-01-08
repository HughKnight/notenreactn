// 1.引包
import React from 'react'

import  './Contacts.less'

// 引入子组件
import Contact from './Contact/Contact.js'

// 2.创建组件
class Contacts extends React.Component{
  componentDidMount(){
    // 发ajax请求
    // fetchApi  // XMLHttpRequest
    fetch('./test.json')
      .then(function(res){
        // 把数据转换为json对象
        return res.json() // 得到的值是数据!
      })
      .then(function(data){
        console.log(data)
      })
  }
  
  render(){
    return (
    <div>
      <p>我是Contacts</p>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
    )
  }
}
// 3.暴露

export default Contacts