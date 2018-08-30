import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../../utils/wrap'
import './ExamQrcode.scss'

class ExamQrcode extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  render() {
    return (
      <div>
        审核二维码管理
      </div>
    )
  }
}

ExamQrcode = connect(() => {
  return {}
})(ExamQrcode)
ExamQrcode = wrap()(ExamQrcode)
export default ExamQrcode