import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { setSideBarActived } from '../../stores/common'
import { Menu, Icon } from 'antd'
import styles from './SideBar.scss'

class SideBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      collapsed: false
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  static props = {
    dispatch: PropTypes.func
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  handleClick(url) {
    const { history: {location} } = this.context.router
    if (location.pathname === url) return
    if (url === 'sysmanage'){
      this.setState({isExpand: !this.state.isExpand})
    } else {
      return this.context.router.history.push(url)
    }
  }

  sidebarItem = [
    {name: '进件管理', url: '/a'},
    {name: '话务管理', url: '/telservermanage/'},
    {name: '审核管理', url: '/exammanage/'},
    {name: '系统设置', url: 'sysmanage'},
    {name: '充值', url: '/chargemanage/'}
  ]

  handleClickItem({item, key, keyPath}){

    console.log(item, key, keyPath)
    //return this.context.router.history.replace(key)
    // const { history: {location} } = this.context.router
    // // if (location.pathname === key) return
    return this.context.router.history.replace(key)
  }

  render() {
    // const { history: {location} } = this.context.router
    // const { isExpand } = this.state
    console.log('render', window.location.href)
    return (
      // <div className={styles.sidebar}>
      //   {this.sidebarItem.map((item, index) => {
      //     return (
      //     <div onClick={this.handleClick.bind(this, item.url)}
      //       key={index}
      //       className={item.url === location.pathname ? styles.actived : ''}
      //     >
      //       {item.name}
      //       {item.url === 'sysmanage' && isExpand && <div>
      //         <div>1</div>
      //         <div>2</div>
      //         <div>3</div>
      //       </div>}
      //     </div>)
      //   })}
      // </div>
      <div className={styles.sidebar}>
        <Menu
          defaultSelectedKeys={['/']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          onClick={this.handleClickItem.bind(this)}
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="/" >
            <Icon type="pie-chart" />
            <span>进件管理</span>
          </Menu.Item>
          <Menu.Item key="/telservermanage/">
            <Icon type="desktop" />
            <span>话务管理</span>
          </Menu.Item>
          <Menu.Item key="/exammanage/">
            <Icon type="inbox" />
            <span>审核管理</span>
          </Menu.Item>
          <Menu.SubMenu key="/sysmanage/" title={<span><Icon type="mail" /><span>系统设置</span></span>}>
            <Menu.Item key="5">机构管理</Menu.Item>
            <Menu.Item key="6">角色配置</Menu.Item>
            <Menu.Item key="7">审核二维码</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="/chargemanage/">
            <Icon type="inbox" />
            <span>充值</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default SideBar