import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { height as getDomHeight } from 'dom-helpers/query'
import style from 'dom-helpers/style'
import { addClass, removeClass, hasClass } from 'dom-helpers/class'
import { whichTransitionEvent } from '../../utils/index'
import PropTypes from 'prop-types'
import './ModelSystem.css'

export default class ModelSystem extends Component {

  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      modal: null,
      data: null
    }
  }

  static contextTypes = {
    router: PropTypes.object,
    ui: PropTypes.object
  }

  showModal (modal) {
    if (!modal) {
      return
    }
    this.setState({
      modal,
      visible: true,
      data: null
    }, () => {
      this.adjustModalStyle()
    })
  }

  hideModal (cb) {
    const { visible } = this.state
    cb = typeof cb === 'function' ? cb : ()=>{}
    if (!visible) {
      return
    }
    const modal = this.refs['modal']
    if (!modal) {
      return
    }
    const modalDom = ReactDOM.findDOMNode(modal)
    if (!modalDom) {
      this.setState({
        visible: false,
        modal: null,
        data: null
      }, cb)
    } else {
      if (!hasClass(modalDom, 'modal-in')) {
        this.setState({
          visible: false,
          modal: null
        }, cb)
      } else {
        removeClass(modalDom, 'modal-in')
        const transitionEvent = whichTransitionEvent()
        const eventHandler = modalDom.addEventListener(transitionEvent, () => {
          modalDom.removeEventListener(transitionEvent, eventHandler)
          this.setState({
            visible: false,
            modal: null
          }, cb)
        })
        addClass(modalDom, 'modal-out')
      }
    }
  }

  handleCancel () {
    const { modal } = this.state
    this.hideModal(modal.onCancel)
  }

  handleConfirm () {
    const { modal, data } = this.state
    this.hideModal(modal.onConfirm ? modal.onConfirm.bind(this, data) : ()=>{})
  }

  handleChooseLeft () {
    const { modal } = this.state
    this.hideModal(modal.onChooseLeft)
  }

  handleChooseRight () {
    const { modal } = this.state
    this.hideModal(modal.onChooseRight)
  }

  adjustModalStyle () {
    const modalNode = this.refs['modal']
    let { modal } = this.state
    if (!modalNode) {
      return
    }
    const modalDom = ReactDOM.findDOMNode(modalNode)
    if (modalDom) {
      style(modalDom, 'display', 'block')
      style(modalDom, 'margin-top', `-${getDomHeight(modalDom, true) / 2}px`)
      addClass(modalDom, 'modal-in')
      addClass(modalDom, modal.customClass)
    }
  }

  renderConfirm () {
    const { modal } = this.state
    const title = modal.title || '提示'
    return (
      <div className='modal' ref='modal'>
        <div className='modal-inner hairlineBottom'>
          <div className='modal-title'>{title}</div>
          {modal.text &&
            <div>
              <div className='modal-text'>{modal.text}</div>
              <div className='modal-redText' style={{color: '#f00'}}>{modal.redText}</div>
            </div>
          }
        </div>
        <div className='modal-buttons modal-buttons-2'>
          <span className='modal-button' onClick={this.handleCancel.bind(this)}>否</span>
          <span className='modal-button modal-button-bold' onClick={this.handleConfirm.bind(this)}>是</span>
        </div>
      </div>
    )
  }

  renderChoose () {
    const { modal } = this.state
    const title = modal.title || '提示'
    return (
      <div className='modal modal-choose modal-delete' ref='modal'>
        <div className='modal-inner '>
          <div className='modal-title'>{title}</div>
          {modal.text &&
            <div className='modal-text'>{modal.text}</div>
          }
        </div>
        <div className={`modal-buttons modal-buttons-2  modal-delete-buttons ${modal.showCloseBtn ? 'custom-button' : ''}`}>
          <span className='modal-delete-button  cancelDelete' style={{fontSize: '13px'}} onClick={this.handleChooseLeft.bind(this)}>{modal.leftText || '取消'}</span>
          <span className='modal-delete-button sureDel' style={{fontSize: '13px'}} onClick={this.handleChooseRight.bind(this)}>{modal.rightText || '确定'}</span>
          {modal.showCloseBtn && <span style={{fontSize: '13px'}} onClick={this.hideModal.bind(this)} className='modal-button'>取消</span>}
        </div>
      </div>
    )
  }

  renderAlert () {
    const {modal} = this.state
    const title = modal.title || '提示'
    return (
      <div className='modal' ref='modal'>
        <div className='modal-inner hairlineBottom'>
          <div className='modal-title'>{title}</div>
          <div className='modal-text' dangerouslySetInnerHTML={{__html: modal.text}}></div>
        </div>
        <div className='modal-buttons modal-buttons-2'>
          <span className='modal-button modal-button-bold' onClick={this.handleConfirm.bind(this)}>确定</span>
        </div>
      </div>
    )
  }

  render () {
    const { visible, modal } = this.state
    const classesOverlay = classNames({
      'modal-overlay': true,
      'modal-overlay-visible': visible
    })
    return (
      <div className='modal-wrapper'>
        <div onClick={this.hideModal && this.hideModal.bind(this)} className={classesOverlay}></div>
        {visible && modal && modal.type === 'confirm' && this.renderConfirm()}
        {visible && modal && modal.type === 'choose' && this.renderChoose()}
        {visible && modal && modal.type === 'alert' && this.renderAlert()}
      </div>
    )
  }
}