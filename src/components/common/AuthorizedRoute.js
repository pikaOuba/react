import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'
import { getMe, setSigning} from '../../stores/user'
import './AuthorizedRoute.css'

class AuthorizedRoute extends Component {
  UNSAFE_componentWillMount() {
    const token = localStorage.getItem('TOKEN')
    if (token) {
      return this.props.dispatch(getMe(true))
    }

    this.props.dispatch(setSigning(false))
  }

  render() {
    const { component: Component, ...rest } = this.props
    const {signing} = this.props
    // const isAuthenticated = me && me.userId 
    return (
      <Route {...rest} render={props => {
        if (signing) {
          return null
        }

        return (
          <Component {...props} />
        )
        // if (isAuthenticated) {
        //   return (
        //     <Component {...props} />
        //   )
        // }

        // return (
        //   <Redirect to='/login' />
        // )
      }} />
    )
  }
}

AuthorizedRoute = connect((state) => {
  return {
    me: state.user.me,
    signing: state.user.signing
  }
})(AuthorizedRoute)

export default AuthorizedRoute
