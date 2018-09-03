import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../common/Button'
import { Modal } from 'antd'


class DetailModal extends Component {

  static propTypes = {
    detailVisible: PropTypes.bool
  }

  hideDetailModal() {
    const { hideDetailModal } = this.props
    if (hideDetailModal) {
      hideDetailModal()
    }
  }


  render() {
    const { detailVisible } = this.props
    return (<Modal title={<span>拉斐尔</span>}
      visible={detailVisible}
      onCancel={this.hideDetailModal.bind(this)}
      cancelText="关闭"
      width={708}
      footer={<div className='detailFooter mt20' onClick={this.hideDetailModal.bind(this)}><Button buttonValue='关闭' heigh={32} width={96}></Button></div>}
      closable={false}
      destroyOnClose={true}>
      <div className='detailBody'>
        <div>
          <span className='detailBodyBebal lightColor'>电话：</span>
          <span className='detailBodyBebalVal deepColor'>186****8080</span>
          <span className='detailBodyBebal lightColor'>渠道：</span>
          <span className='detailBodyBebalVal deepColor'>华南</span>
        </div>
        <div className='mt20'>
          <span className='detailBodyBebal lightColor'>身份证：</span>
          <span className='detailBodyBebalVal deepColor'>395038502957295503</span>
          <span className='detailBodyBebal lightColor'>导入时间：</span>
          <span className='detailBodyBebalVal deepColor'>2018-11-06 23:14</span>
        </div>
        <div className='mt20'>
          <span className='detailBodyBebal lightColor'>芝麻分：</span>
          <span className='detailBodyBebalVal deepColor'>395038502957295503</span>
        </div>
        <div className='line'></div>
        <div className='ant-modal-title alignCenter'>
          <span>跟进记录</span>
        </div>
        <div>
          <div className='row lightColor mt43'>
            <div style={{ width: '92px' }}>话务员</div>
            <div style={{ width: '176px' }}>通话时间</div>
            <div style={{ width: '104px' }}>通话结果</div>
            <div style={{ width: '240px' }}>备注</div>
          </div>
          <div className='row deepColor mt20'>
            <div style={{ width: '92px' }}>西海</div>
            <div style={{ width: '176px' }}>2018-11-06 23:14:25</div>
            <div style={{ width: '104px' }}>明确拒绝</div>
            <div style={{ width: '240px' }}>有兴趣，进一步联系中</div>
          </div>
        </div>
      </div>
    </Modal>)
  }

}

export default DetailModal