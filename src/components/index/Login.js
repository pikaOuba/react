import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../utils/wrap'
import { Button } from 'element-react'
import styles from './Login.scss'
class Login extends Component {
  
  static contextTypes = {
    router: PropTypes.object
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    console.log(111, prevProps, prevState)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(222, prevProps, prevState, snapshot)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.container1}>123456</div>
        <Button type="primary">欢迎登录页面 </Button>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">欢迎登录页面 </Button><br/>
        <Button type="primary">lallalalala </Button>
        
      </div>
      
    )
  }
}

Login = connect(() => {
  return {}
})(Login)
Login = wrap()(Login)
export default Login