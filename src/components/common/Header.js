import React, { Component } from 'react'
import PropTypes from 'prop-types'
import avatarImg from '../../assests/images/avatar.png' 
import signOutImg from '../../assests/images/signOut.png'
import signOutOverImg from '../../assests/images/signOutOver.png'
import styles from './Header.scss'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      signIcon: signOutImg
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleMouseOver() {
    this.setState({signIcon: signOutOverImg})
  }

  handleMouseOut() {
    this.setState({signIcon: signOutImg})
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.companyName}>大森</div>
        <div className={styles.user}>
          <div>
            <img src={avatarImg} alt='' className={styles.avatar}/>
            <span>系统管理员</span>
          </div>
          <div onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
            <img src={this.state.signIcon} alt='' className={styles.signOut}/>
            <span>退出</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Header