import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../../utils/wrap'
import './Role.scss'

class Role extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  render() {
    return (
      <div>
        角色管理
      </div>
    )
  }
}

Role = connect(() => {
  return {}
})(Role)
Role = wrap()(Role)
export default Role