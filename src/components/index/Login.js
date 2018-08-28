import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../utils/wrap'
import { Button } from 'element-react'
import styles from './Login.css'
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
      <Button className={styles.container} type="primary">
        欢迎登录页面
      </Button>
    )
  }
}

Login = connect(() => {
  return {}
})(Login)
Login = wrap()(Login)
export default Login