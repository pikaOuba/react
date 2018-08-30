import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../../utils/wrap'
import './Organization.scss'

class Organization extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  render() {
    return (
      <div>
        机构管理
      </div>
    )
  }
}

Organization = connect(() => {
  return {}
})(Organization)
Organization = wrap()(Organization)
export default Organization