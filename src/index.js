import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthorizedRoute from './components/common/AuthorizedRoute'
import store from './stores'

import Login from './components/index/Login'
import Index from './components/index/Index'
import TelserverManage from './components/index/TelserverManage'
import ExamManage from './components/index/ExamManage'
import SysManage from './components/index/SysManage'
import ChargeManage from './components/index/ChargeManage'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <AuthorizedRoute exact path="/" component={Index}/>
        <AuthorizedRoute path="/telservermanage" component={TelserverManage}/> 
        <AuthorizedRoute path="/exammanage" component={ExamManage}/> 
        <AuthorizedRoute path="/sysmanage" component={SysManage}/> 
        <AuthorizedRoute path="/chargemanage" component={ChargeManage}/> 
        
        {/* <AuthorizedRoute exact path="/" component={Home}/>*/}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)