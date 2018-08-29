import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { setSideBarActived } from '../../stores/common'
import styles from './SideBar.scss'

class SideBar extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static props = {
    dispatch: PropTypes.func
  }
  
  handleClick(url) {
    const { history: {location} } = this.context.router
    if (location.pathname === url) return
    return this.context.router.history.push(url)
  }

  sidebarItem = [
    {name: '进件管理', url: '/'},
    {name: '话务管理', url: '/telservermanage'},
    {name: '审核管理', url: '/exammanage'},
    {name: '系统设置', url: '/sysmanage'},
    {name: '充值', url: '/chargemanage'}
  ]

  render() {
    const { history: {location} } = this.context.router
    return (
      <div className={styles.sidebar}>
        {this.sidebarItem.map((item, index) => {
          return (<div onClick={this.handleClick.bind(this, item.url)} key={index} className={item.url === location.pathname ? styles.actived : ''}>{item.name}</div>)
        })}
      </div>
    )
  }
}
export default SideBar