import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../utils/wrap'
import './ChargeManage.scss'

class ChargeManage extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  render() {
    return (
      <div>
        充值
      </div>
    )
  }
}

ChargeManage = connect(() => {
  return {}
})(ChargeManage)
ChargeManage = wrap()(ChargeManage)
export default ChargeManage