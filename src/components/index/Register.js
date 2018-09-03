import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import md5 from 'md5'
import Button from '../common/Button'
import { reginster } from '../../stores/user'
import styles from './Register.scss'
class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      nickName: '',
      password: ''
    }
  }
  
  static contextTypes = {
    router: PropTypes.object
  }

  handleShowRegister () {
    // this.setState({visibale: 'register'})
  }

  handleRegister() {
    const { name, nickName, password } = this.state
    this.props.dispatch(reginster({ name, nickName, password })).then(()=>{
      return this.context.router.history.replace('/login')
    })
  }

  hanldeChageName(e) {
    this.setState({name: e.target.value})
  }

  handleChangeNickName(e) {
    this.setState({nickName: e.target.value})
  }

  handleChangePassword(e) {
    this.setState({
      password: md5(e.target.value)
    })
  }

  render() {
    return (
      <div className={styles.loginPage}>
        <div className={styles.register}>
          <div>申请</div>
          <Input placeholder="name" className={styles.inputItem} onChange={this.hanldeChageName.bind(this)}/>
          <Input placeholder="nickName" className={styles.inputItem} onChange={this.handleChangeNickName.bind(this)} />
          <Input placeholder="password" className={styles.inputItem} onChange={this.handleChangePassword.bind(this)} />
          <div className={styles.inputItem} onClick={this.handleRegister.bind(this)}><Button buttonValue='提交' width={200}></Button></div>
        </div>
      </div>
      
    )
  }
}

Register = connect(() => {
  return {}
})(Register)
export default Register