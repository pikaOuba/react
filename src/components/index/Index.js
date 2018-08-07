import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import wrap from '../../utils/wrap'
import './Index.css'

class Index extends Component {
  static contextTypes = {
    router: PropTypes.object,
    ui: PropTypes.object
  }
  
  handleClick() {
    return this.context.ui.showModal({
      type: 'alert',
      title: 'welCome',
      onComfirm: ()=>{}
    })
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