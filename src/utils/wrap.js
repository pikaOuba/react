import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'element-theme-default'

const mapStateToProps = () => {
  return {
  }
}

export default () => {
  return (WrappedComponent) => connect(mapStateToProps) (
    
    class extends Component {
      render () {   
        return (
          <WrappedComponent {...this.props} />
        )
      }
    }
  )
}