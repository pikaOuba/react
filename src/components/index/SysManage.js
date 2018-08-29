import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../utils/wrap'
import './SysManage.scss'

class SysManage extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  render() {
    return (
      <div>
        系统管理
      </div>
    )
  }
}

SysManage = connect(() => {
  return {}
})(SysManage)
SysManage = wrap()(SysManage)
export default SysManage