import React, {Component} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Page.scss'
import SideBar from './SideBar';

export default class Page extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleClick(url) {
    return this.context.router.history.push(url)
  }

  render () {
    const { children, className } = this.props
    const classes = classNames({
      'view': true
    }, className)
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>header</div>
        <div className={styles.container}>
          <SideBar/>
          <div className={classes}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}