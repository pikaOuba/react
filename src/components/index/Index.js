import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../utils/wrap'
import './Index.scss'

class Index extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  render() {
    return (
      <div>
        欢迎首页
      </div>
    )
  }
}

Index = connect(() => {
  return {}
})(Index)
Index = wrap()(Index)
export default Index