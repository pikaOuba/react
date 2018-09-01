import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css'
import Page from '../components/common/Page'
import '../index.css'

const mapStateToProps = () => {
  return {
    // sidebarActived: state.common.sidebarActived
  }
}

export default () => {
  return (WrappedComponent) => connect(mapStateToProps) (
    
    class extends Component {
      componentDidMount() {
        if(document.getElementsByClassName('ant-calendar-range-picker-separator')[0]) {
          document.getElementsByClassName('ant-calendar-range-picker-separator')[0].innerHTML = '至'
        }
      }

      render () {   
        return (
          <Page>
            <WrappedComponent {...this.props} />
          </Page>
        )
      }
    }
  )
}