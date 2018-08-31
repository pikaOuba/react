import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Button.scss'

class Button extends Component {

  static propTypes = {
    buttonValue: PropTypes.string,
    borderColor: PropTypes.string,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    lineHeight: PropTypes.number,
  }

  static defaultProps = {
    backgroundColor :'#5878FF',
    fontColor: '#fff',
    borderColor: '#5878FF',
    width: 68,
    height: 36 
  }

  render() {
    const { buttonValue, backgroundColor, fontColor, height, width, borderColor } = this.props
    return (
       <div className={styles.button} 
        style={{ backgroundColor,
                 color: fontColor,
                 height: `${height}px`,
                 lineHeight: `${height}px`,
                 width: `${width}px`,
                 border: `1px solid ${borderColor}`
              }} >
        {buttonValue}
      </div>
    )
  }
}
export default Button