import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import md5 from 'md5'
import Button from '../common/Button'
import { signin } from '../../stores/user'
import styles from './Login.scss'
class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }
  
  static contextTypes = {
    router: PropTypes.object
  }

  hanleLogin(){
    const { name, password } = this.state
    this.props.dispatch(signin({name, password:md5(password)}))
      .catch(error => {console.log(error)})
      .then(()=> {
        return this.context.router.history.replace('/')
      })
  }

  handleChangeName(e) {
    this.setState({name: e.target.value})
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value})
  }

  handleShowRegister() {
    this.context.router.history.push('/resister')
  }

  render() {
    return (
      <div className={styles.loginPage}>
        <div className={styles.login}>
          <div>登录</div>
          <Input placeholder="账号" className={styles.inputItem} onChange={this.handleChangeName.bind(this)} />
          <Input placeholder="密码" className={styles.inputItem} onChange={this.handleChangePassword.bind(this)} />
          <div className={styles.inputItem} onClick={this.hanleLogin.bind(this)}><Button buttonValue='登录' width={200}></Button></div>
          <div className={`${styles.inputItem} ${styles.mt20}`} onClick={this.handleShowRegister.bind(this)}>还没有账号点击申请</div>
        </div>
      </div>
      
    )
  }
}

Login = connect(() => {
  return {}
})(Login)
export default Login