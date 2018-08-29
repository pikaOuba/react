import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../utils/wrap'
import './ExamManage.scss'

class ExamManage extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  render() {
    return (
      <div>
        审核管理
      </div>
    )
  }
}

ExamManage = connect(() => {
  return {}
})(ExamManage)
ExamManage = wrap()(ExamManage)
export default ExamManage