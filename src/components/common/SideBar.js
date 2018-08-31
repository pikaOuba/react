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
          inlineIndent={6}
          className="menuUl"
          onClick={this.handleClickItem.bind(this)}
        >
          <MenuItem key="/" >
            <div className='menuItem'>
              <Icon type="pie-chart" />
              <span>进件管理</span>
            </div>
          </MenuItem>
          <MenuItem key="/telservermanage/">
            <div className='menuItem'>
              <Icon type="desktop" />
              <span>话务管理</span>
            </div>
          </MenuItem>
          {/* <MenuItem key="/exammanage/">
            <div className='menuItem'>
              <Icon type="inbox" />
              <span>审核管理</span>
            </div>
          </MenuItem> */}
          <Menu.SubMenu key="/sysmanage/" title={<div className='menuItem'><Icon type="mail" /><span>系统设置</span></div>}>
            <MenuItem key="/sysmanage/role">
              <div className='subMeunItem'>添加角色</div>
            </MenuItem>
            <MenuItem key="/sysmanage/organization">
              <div className='subMeunItem'>添加员工</div>
            </MenuItem>
            {/* <MenuItem key="/sysmanage/examqrcode">
              <div className='subMeunItem'>审核二维码</div>
            </MenuItem> */}
          </Menu.SubMenu>
          {/* <MenuItem key="/chargemanage/">
            <div className='menuItem'>
              <Icon type="inbox" />
              <span>充值</span>
            </div>
          </MenuItem> */}
        </Menu>
      </div>
    )
  }
}
export default SideBar