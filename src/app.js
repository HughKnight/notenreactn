// 1.引包
import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory} from 'react-router'

import './app.less'


import Contacts from './Components/Contacts/Contacts.js'
import Find from './Components/Find/Find.js'
import Me from './Components/Me/Me.js'
import WeChat from './Components/WeChat/WeChat.js'

// 2.创建组件
class App extends React.Component{
  render(){
    return (
      <div className="app">
        <ul>
          <li><Link to="/wechat">微信</Link></li>
          <li><Link to="/contacts">通讯录</Link></li>
          <li><Link to="/find">发现</Link></li>
          <li><Link to="/me">我</Link></li>
        </ul>
        {this.props.children}
      </div>
      )
  }
}

// 3.渲染组件
// 渲染时是要有路由规则
ReactDOM.render(
  <Router history={hashHistory}>
     <Route path="/" component={App}>
        <Route path="/contacts" component={Contacts}></Route>
        <Route path="/Find" component={Find}></Route>
        <Route path="/Me" component={Me}></Route>
        <Route path="/WeChat" component={WeChat}></Route>
     </Route>
  </Router>,
  document.getElementById('box')
  )