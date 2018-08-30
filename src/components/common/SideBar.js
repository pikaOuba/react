import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import styles from './SideBar.scss'

const MenuItem = Menu.Item
class SideBar extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static props = {
    dispatch: PropTypes.func
  }

  componentWillMount(){
    const { history: {location} } = this.context.router
    localStorage.setItem('activeBar', location.pathname)
    const urlStr = location.pathname.split('/sysmanage')
    if (urlStr.length === 2 ){
      localStorage.setItem('defaultOpenKeys', '/sysmanage/')
    } else {
      localStorage.removeItem('defaultOpenKeys')
    }
  }


  handleClick(url) {
    const { history: {location} } = this.context.router
    localStorage.setItem('activeBar', location.pathname)
    return this.context.router.history.push(url)
  }

  handleClickItem({ key }){
    localStorage.setItem('activeBar', key)
    return this.context.router.history.push(key)
  }

  render() {
    const activeBar = localStorage.getItem('activeBar')
    return (
      <div className={styles.sidebar}>
        <Menu
          defaultSelectedKeys={['/']}
          selectedKeys={[activeBar]}
          defaultOpenKeys={[localStorage.getItem('defaultOpenKeys')]}
          mode="inline"
          theme="dark"
          onClick={this.handleClickItem.bind(this)}
        >
          <MenuItem key="/" >
            <Icon type="pie-chart" />
            <span>进件管理</span>
          </MenuItem>
          <MenuItem key="/telservermanage/">
            <Icon type="desktop" />
            <span>话务管理</span>
          </MenuItem>
          <MenuItem key="/exammanage/">
            <Icon type="inbox" />
            <span>审核管理</span>
          </MenuItem>
          <Menu.SubMenu key="/sysmanage/" title={<span><Icon type="mail" /><span>系统设置</span></span>}>
            <Menu.Item key="/sysmanage/organization">机构管理</Menu.Item>
            <Menu.Item key="/sysmanage/role">角色配置</Menu.Item>
            <Menu.Item key="/sysmanage/examqrcode">审核二维码</Menu.Item>
          </Menu.SubMenu>
          <MenuItem key="/chargemanage/">
            <Icon type="inbox" />
            <span>充值</span>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
export default SideBar