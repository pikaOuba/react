import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthorizedRoute from './components/common/AuthorizedRoute'
import store from './stores'

import Login from './components/index/Login'
import Index from './components/index/Index'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <AuthorizedRoute exact path="/" component={Index}/>
        {/* <AuthorizedRoute exact path="/" component={Home}/>*/}
        {/* <AuthorizedRoute path="/authagereement" component={AuthAgreement}/>  */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)