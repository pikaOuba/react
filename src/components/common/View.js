import React, {Component} from 'react'
import classNames from 'classnames'
import ModalSystem from './ModelSystem'
import PropTypes from 'prop-types'
import './View.css'

export default class View extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  static childContextTypes = {
    ui: PropTypes.object
  }

  getChildContext () {
    return {
      ui: {
        showModal: (modal) => { this.showModal(modal) },
        hideModal: () => { this.hideModal() },
      }
    }
  }

  showModal (modal) {
    this.refs['modalSystem'].showModal(modal)
  }

  hideModal () {
    this.refs['modalSystem'].hideModal()
  }

  render () {
    const { children, className } = this.props
    const classes = classNames({
      'view': true
    }, className)
    return (
      <div className='wrapper'>
        <div className='views'>
          <div className={classes}>
            {children}
          </div>
        </div>
        <ModalSystem ref='modalSystem' />
      </div>
    )
  }
}
