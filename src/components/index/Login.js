import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../utils/wrap'
import { Button } from 'react-weui'
import './Login.css'

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object,
    ui: PropTypes.object
  }
  
  handleClick() {
    return this.context.ui.showModal({
      type: 'alert',
      title: 'welCome',
      onComfirm: ()=>{}
    })
  }

  render() {
    return (
      <div>
        欢迎登录页面
        <Button onClick={this.handleClick.bind(this)}>点击我弹框</Button>
      </div>
    )
  }
}

Login = connect(() => {
  return {}
})(Login)
Login = wrap()(Login)
export default Login