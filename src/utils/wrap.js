import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Page} from 'react-weui'
import View from '../components/common/View'

const mapStateToProps = () => {
  return {
  }
}

export default () => {
  return (WrappedComponent) => connect(mapStateToProps) (
    
    class extends Component {
      render () {   
        return (
          <Page ptr={false} infiniteLoader={false} transition={false}>
            <View>
              <WrappedComponent {...this.props} />
            </View>
          </Page>
        )
      }
    }
  )
}